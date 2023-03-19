import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import {
  Divider,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { useState } from "react";

let contactsList = [
  { name: "Alice", age: "18", email: "alice@gmail.com" },
  { name: "Bob", age: "20", email: "bob@gmail.com" },
  { name: "Cathy", age: "55", email: "cathy@gmail.com" },
]

export default function ContactsList(props) {
  const [contacts, setContacts] = useState([]);

  const deleteContact = (email) => {
    const updatedContacts = contacts.filter(contact => contact.email !== email);
    setContacts(updatedContacts)
  };

  const addContact = () => {
    setContacts(contactsList)
  }

  return (
    <div>
      <div style={{ paddingBottom: "40px" }}>
        <h2 style={{ textAlign: "center" }}>My Contacts</h2>
        <Button onClick={addContact} style={{ marginLeft: "auto" }} variant="outlined" size="small">
          Add Contact
        </Button>
      </div>

      <List>
        {contacts.map((contact) => (
          <Container maxWidth="sm">
            <Box>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.Ess-KvWCZNqR1ePuy2cjJAAAAA%26pid%3DApi&f=1&ipt=c8f8440c070183128b3336384d591be4117a8bfeae0fddc338a8ad2ef23d27ff&ipo=images"
                  />
                </ListItemAvatar>
                <ListItemText primary={contact.name} secondary={contact.age} />
                <div>
                  <ListItemButton>
                    <EditIcon />
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => deleteContact(contact.email)}
                  >
                    <DeleteOutlineIcon />
                  </ListItemButton>
                </div>
              </ListItem>
              <Divider />
            </Box>
          </Container>
        ))}
      </List>
    </div>
  );
}
