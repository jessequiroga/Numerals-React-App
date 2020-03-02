import React from 'react';
import { SongTitleHandler } from '../../utils/Handlers';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';


interface TitleEditProps {
    title : string,
    titleHandler : any
}

const SongTitle: React.FC<TitleEditProps> = ({
    title,
    titleHandler
  }) => {

    const [clickedTitle, setClickedTitle] = React.useState(false)
    const [tmpTitle, setTmpTitle] = React.useState('')
    
    const validateText = (text:string) => {
        return (text.length > 0 && text.length < 64);
    }

    const handleChange = (data:any) => {
        if(validateText(data.target.value)) {
            setTmpTitle(data.target.value)
        }
    }; 

    const handleSaveClick = () => {
        var handler = new SongTitleHandler();
        handler.title = tmpTitle;
        titleHandler(handler)
        setClickedTitle(!clickedTitle)
    }

    const handleClick = () => {
        setClickedTitle(!clickedTitle)
    }

  return (
    <div>
        { ! clickedTitle ?

            <Typography variant="h4" onClick={() => {handleClick()}}>
                {title}
            </Typography>
        :
         <div>
          <TextField 
            key="numeral-title"
            fullWidth
            defaultValue={title}
            onChangeCapture={handleChange}
          />
          <button onClick={handleSaveClick}>Update</button>
          <button onClick={handleClick}>Dismiss</button>
          </div>
        }
    </div>
  );
}

export default SongTitle;