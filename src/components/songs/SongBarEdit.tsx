import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BarRemoveHandler } from '../../utils/Handlers';

export interface BarEditProps {
    barIndex : number,
    configHandler : any
}

const SongBarEdit: React.FC<BarEditProps> = ({
    barIndex,
    configHandler
  }) =>  {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(barIndex)
    var handler = new BarRemoveHandler();
    handler.barIndex = barIndex;
    configHandler(handler)
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Edit
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
            Delete
        </MenuItem>
        <MenuItem onClick={handleClose}>
            Duplicate
        </MenuItem>
        <MenuItem onClick={handleClose}>Move Up</MenuItem>
        <MenuItem onClick={handleClose}>Move Down</MenuItem>
      </Menu>
    </div>
  );
}

export default SongBarEdit;
