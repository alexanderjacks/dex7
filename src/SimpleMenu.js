import React from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const url0 = '..'
  const url1 = '../items'
  const url2 = '../people'
  const url3 = '../recipes'

  return (
    <div>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
        variant="contained"
      >
        Sort Stuff!
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link href={url0}>HOME</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url1}>Items</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url2}>People</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url3}>Recipes</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenu;