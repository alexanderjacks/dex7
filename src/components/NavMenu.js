import React from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const url_ = '..'
  const url1 = '../forage'
  const url2 = '../crops'
  const url3 = '../minerals'
  const url4 = '../fish'
  const url5 = '../cooking'
  const url6 = '../crafting'
  const url7 = '../artisan'
  const url0 = '../bundles'

  return (
    <div>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="secondary"
        variant="contained"
      >
        LISTS&nbsp;
        <span>🚧
        </span>
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link href={url_}>HOME</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url1}>Forage</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url2}>Crops</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url3}>Minerals</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url4}>Fish</Link>
        </MenuItem>
        {/*<MenuItem onClick={handleClose}>
          <Link href={url5}>Cooking</Link>
        </MenuItem>*/}
        {/*<MenuItem onClick={handleClose}>
          <Link href={url6}>Crafting</Link>
        </MenuItem>*/}
        {/*<MenuItem onClick={handleClose}>
          <Link href={url7}>Artisan</Link>
        </MenuItem>*/}
        <MenuItem onClick={handleClose}>
          <Link href={url0}>Bundles</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavMenu;