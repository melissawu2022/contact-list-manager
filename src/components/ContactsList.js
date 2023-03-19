import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Divider, ListItemAvatar, ListItemIcon } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const contacts = [
  { name: "Alice", age: "18" },
  { name: "Bob", age: "20" },
  { name: "Cathy", age: "55" },
]

export default function ContactsList() {
  return (
    <div >
      <div style={{paddingBottom: "40px"}}>
        <h2 style={{ textAlign: 'center' }}>My Contacts</h2>
        <Button style={{ marginLeft: 'auto' }} variant="outlined" size='small'>Add Contact</Button>
      </div>
      
      <List>
        {
          contacts.map((contact) => (
            <Container maxWidth="sm" >
              <Box  >
                <ListItem alignItems="flex-start" >
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.Ess-KvWCZNqR1ePuy2cjJAAAAA%26pid%3DApi&f=1&ipt=c8f8440c070183128b3336384d591be4117a8bfeae0fddc338a8ad2ef23d27ff&ipo=images" />
                  </ListItemAvatar>
                  <ListItemText primary={contact.name} secondary={contact.age} />
                  <div>
                    <ListItemIcon >
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemIcon  >
                      <DeleteOutlineIcon />
                    </ListItemIcon>
                  </div>
                </ListItem>
                <Divider />

              </Box>
              
            </Container>
            
          ))
        }

      </List>

    </div>
  )
}
