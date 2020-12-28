import './App.css';
import {ChatBubble} from "./components/ChatBubble";
import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {getMessages, sendMessage} from "./utils";

function App() {
  const backgroundImage = 'https://raw.githubusercontent.com/DoodleScheduling/hiring-challenges/master/frontend-engineer/assets/Body%20BG.png';
  const [value, setValue] = React.useState('');
  const username = 'BetinaThroughApp';

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    getMessages()
        .then(setMessages)
        .catch((error) => console.log(error));
  }, []);

  const onClickSend = () => {
    const newMessage = {message: value, author: username};
    sendMessage(newMessage).catch((error) => console.log(error));
  };

  return (
    <div className="App" style={ {height: '100vh', marginTop: '-1rem', backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '640px'} }>
      <div>
        <div>
          {
            messages.map((message, index) => (
                <ChatBubble key={ index } author={ message.author } message={ message.message } mainBubble={ message.author === username } />
            ))
          }
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
          <Button onClick={ onClickSend } variant="contained" style={ {marginLeft: '1rem', marginRight: '1rem'} }>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
