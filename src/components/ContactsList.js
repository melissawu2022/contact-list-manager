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
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField } from '@mui/material';


export default function ContactsList(props) {
  let [contacts, setContacts] = useState([]);
  const [contactID, setContactID] = useState(0)
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")


  /**
   * if have extra time, make sure to check for unique emails
   */
  const deleteContact = (contactID) => {
    const updatedContacts = contacts.filter(contact => contact.contactID !== contactID);
    console.debug("updatedContacts: ", updatedContacts)
    setContacts(updatedContacts)
  };

  const handleOpen = () => {
    setOpen(true);
  }

  const addContact = (contactID, firstName, email) => {
    let newContact = { contactID: contactID, firstName: firstName, email: email }

    const updatedContacts = [...contacts, newContact]
    setContacts(updatedContacts)
    
    setContactID(contactID+1)
    handleClose()
  }


  const handleClose = () => {
    setFirstName("")
    setLastName("")
    setPhoneNumber("")
    setEmail("")
    setAddress("")
    setOpen(false);
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
    console.debug("firstName", firstName)
  };

  const handleLastName = (e) => {
    setLastName(e.target.value)
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
  };

  const handleAddress = (e) => {
    setAddress(e.target.value)
  };


  return (
    <div>
      <div style={{ paddingBottom: "40px" }}>
        <h2 style={{ textAlign: "center" }}>My Contacts</h2>
        <Button onClick={handleOpen} style={{ marginLeft: "auto" }} variant="outlined" size="small">
          Add Contact
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Contact</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
              value={firstName}
              onChange={handleFirstName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              value={lastName}
              onChange={handleLastName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="Phone Number"
              type="text"
              fullWidth
              variant="standard"
              value={phoneNumber}
              onChange={handlePhoneNumber}
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={handleEmail}
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="Address"
              type="text"
              fullWidth
              variant="standard"
              value={address}
              onChange={handleAddress}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => addContact(contactID, firstName,email)}>Add Contact</Button>
          </DialogActions>
        </Dialog>
      </div>

      <List>
        {contacts.map((contact, index) => (
          <Container key={index} maxWidth="sm">
            <Box>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.Ess-KvWCZNqR1ePuy2cjJAAAAA%26pid%3DApi&f=1&ipt=c8f8440c070183128b3336384d591be4117a8bfeae0fddc338a8ad2ef23d27ff&ipo=images"
                  />
                </ListItemAvatar>
                <ListItemText primary={contact.firstName} secondary={ contact.firstName + contact.email} />              
                <div>
                  <ListItemButton>
                    <EditIcon />
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => deleteContact(contact.contactID)}
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
