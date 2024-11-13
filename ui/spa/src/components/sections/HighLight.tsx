import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Grid,
  Box
} from '@mui/material';
import { useDataProvider } from 'react-admin';
import { getConf } from '../../Config';

const RelatedDataInstance = ({ relatedData }) => {
  const conf = getConf();
  const resource = conf.resources && conf.resources[relatedData.type];
  if (!resource) return null;

  return (
    <List>
      {resource.attributes
        .filter(attr => relatedData[attr.name] != null)
        .map(attr => (
          <ListItem key={attr.name} style={{ padding: '4px 0' }}>
            <ListItemText
              primary={<span><strong>{attr.label || attr.name}:</strong> {relatedData[attr.name]}</span>}
            />
          </ListItem>
        ))}
    </List>
  );
};

const ResourceDialog = ({ open, onClose, resourceData }) => {
  const conf = getConf();
  const resourceConf = conf.resources && conf.resources[resourceData.type];
  if (!resourceConf) return null;

  const { attributes, tab_groups: tabGroups } = resourceConf;

  const attributeItems = attributes
    .filter(attr => resourceData[attr.name] != null)
    .map(attr => (
      <ListItem key={attr.name} style={{ padding: '4px 0' }}>
        <ListItemText
          primary={<span><strong>{attr.label || attr.name}:</strong> {resourceData[attr.name]}</span>}
        />
      </ListItem>
    ));

  const relatedItems = (tabGroups || []).map(({ name }) => {
    const relatedData = resourceData[name];
    if (!relatedData) return null;

    if (Array.isArray(relatedData)) {
      return (
        <div key={name}>
          <Typography variant="subtitle1" style={{ marginTop: '16px' }}>{name}</Typography>
          <List>
            {relatedData.map(item => (
              <RelatedDataInstance key={item.id} relatedData={item} />
            ))}
          </List>
        </div>
      );
    }
    return (
      <div key={name}>
        <Typography variant="subtitle1" style={{ marginTop: '16px' }}>{name}</Typography>
        <RelatedDataInstance relatedData={relatedData} />
      </div>
    );
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle style={{ borderBottom: '2px solid #b39ddb', backgroundColor: '#f3e5f5' }}>{resourceData.name || 'Resource Details'}</DialogTitle>
      <DialogContent style={{ backgroundColor: '#f3e5f5' }}>
        <List>{attributeItems}</List>
        <Divider style={{ margin: '20px 0', backgroundColor: '#b39ddb' }} />
        {relatedItems}
      </DialogContent>
    </Dialog>
  );
};

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppBar position="static" style={{ marginBottom: '16px', backgroundColor: '#b39ddb' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dinosaur Park Management
        </Typography>
        <Typography variant="h6">
          {time.toLocaleTimeString()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const LandingPage = () => {
  const dataProvider = useDataProvider();
  const [resources, setResources] = useState([]);
  const [dialogData, setDialogData] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      const conf = getConf();
      const resourceNames = Object.keys(conf.resources).filter(name => !name.startsWith('SPA'));
      const fetchData = resourceNames.map(name =>
        dataProvider.getList(name, {
          pagination: { page: 1, perPage: 5 },
          meta: { include: ['+all'] }
        })
      );
      const results = await Promise.all(fetchData);
      const resourceMap = resourceNames.reduce((acc, name, index) => {
        acc[name] = results[index].data;
        return acc;
      }, {});
      setResources(resourceMap);
    };
    fetchResources();
  }, [dataProvider]);

  const openDialog = data => {
    setDialogData(data);
  };

  const closeDialog = () => {
    setDialogData(null);
  };

  return (
    <div>
      <Header />
      <Box style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
        <Typography variant="h4" gutterBottom style={{ borderBottom: '2px solid #b39ddb', display: 'inline-block', paddingBottom: '4px' }}>
          Resource Overview
        </Typography>
        <Grid container spacing={2} style={{ marginTop: '16px' }}>
          {Object.entries(resources).map(([resourceType, resourceData]) => (
            <Grid key={resourceType} item xs={12}>
              <Typography variant="h5" style={{ marginTop: '20px', marginBottom: '10px', borderBottom: '2px solid #eee' }}>
                {resourceType}
              </Typography>
              <Grid container spacing={2}>
                {resourceData.map(data => (
                  <Grid item xs={12} md={6} lg={4} key={data.id}>
                    <Card onClick={() => openDialog(data)} style={{ cursor: 'pointer', height: '100%', backgroundColor: '#f8bbd0' }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>{data.name || resourceType}</Typography>
                        {getConf().resources[resourceType].attributes
                          .filter(attr => attr.name !== 'id' && data[attr.name] != null)
                          .filter(attr => !['id', 'name'].includes(attr.name) && data[attr.name] != null)
                          .map(attr => (
                            <Typography variant="body2" key={attr.name}><strong>{attr.label || attr.name}: </strong>{data[attr.name]}</Typography>
                          ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
        {dialogData && (
          <ResourceDialog open={!!dialogData} onClose={closeDialog} resourceData={dialogData} />
        )}
      </Box>
    </div>
  );
};

export default LandingPage;