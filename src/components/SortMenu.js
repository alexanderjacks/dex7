import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import '../App.css';

function SortMenu() {
  {/* these 3 req for basic Button UX*/}
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
        className="pulse"
      >
        STUFF&nbsp;
        <span>🔎</span>
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link href={url_}>🏡 Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url1}>
            <img src={require('../img/Blackberry.png')} />
            <span className="SortMenuItem">Forage</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url2}>
            <img src={require('../img/Melon.png')} />
            <span className="SortMenuItem">Crops</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url3}>
            <img src={require('../img/Geode.png')} />
            <span className="SortMenuItem">Minerals</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url4}>
            <img src={require('../img/Dorado.png')} />
            <span className="SortMenuItem">Fish</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url0}>
            <img src={require('../img/Apple.png')} />
            <span className="SortMenuItem">Bundles</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url5}>
            <img src={require('../img/Sashimi.png')} />
            <span className="SortMenuItem">Recipes</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={url6}>
            <img src={require('../img/DialogueBubbleLove.png')} />
            <span className="SortMenuItem">People</span>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SortMenu;
