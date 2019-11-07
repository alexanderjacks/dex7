import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

function SortMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) { setAnchorEl(event.currentTarget); }
  function handleClose() { setAnchorEl(null); }
  const url_ = '..'
  const url0 = '../bundles'
  const url1 = '../forage'
  const url2 = '../crops'
  const url3 = '../minerals'
  const url4 = '../fish'
  const url5 = '../recipes'
  const url6 = '../people'

  return (
    <div>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="secondary"
        variant="contained"
      >
        SORT&nbsp;
        <span>🔎</span>
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link href={url_}>[ X ] CLEAR</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url1}>
          <img src={require('../img/Blackberry.png')} />
          <span>Forage</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url2}>
          <img src={require('../img/Melon.png')} />
          Crops
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url3}>
          <img src={require('../img/Geode.png')} />
          Minerals
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url4}>
          <img src={require('../img/Dorado.png')} />
          Fish
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url0}>
          <img src={require('../img/Apple.png')} />
          Bundles
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url5}>
          <img src={require('../img/Sashimi.png')} />
          Recipes
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url6}>
          <img src={require('../img/DialogueBubbleLove.png')} />
          People
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SortMenu;
