import './App.css';
import {ChatBubble} from "./components/ChatBubble";
import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  const backgroundImage = 'https://raw.githubusercontent.com/DoodleScheduling/hiring-challenges/master/frontend-engineer/assets/Body%20BG.png';
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App" style={ {height: '100vh', marginTop: '-1rem', backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '640px'} }>
      <div>
        <div>
          <ChatBubble />
          <ChatBubble mainBubble />
          <ChatBubble />
        </div>
        <div style={ {
          backgroundColor: '#1F591A',
          minHeight: '2rem',
          position: 'fixed',
          bottom: '0',
          width: '100%',
          padding: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between'
        } }>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            rowsMax="4"
            value={value}
            onChange={handleChange}
            variant="outlined"
            placeholder="Message"
            style={ {backgroundColor: '#FFFFFF', borderRadius: '4px'} }
            fullWidth
          />
          <Button variant="contained" style={ {marginLeft: '1rem', marginRight: '1rem'} }>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
