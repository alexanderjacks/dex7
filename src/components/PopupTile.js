import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SeasonTile from './SeasonTile.js';
import '../App.css';

function PopupTile(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClose() { setAnchorEl(null); }
  function handleClick(event) { setAnchorEl(event.currentTarget); }
    return (
      <div className="css3frame-border-3">
      <div className="css3frame-border-4">
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          color="green"
          variant="contained"
          className=""
        >
            <img
              className=""
              src={props.Image}
              alt={props.Name}
            />
        </Button>

        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} className="coled dim-the-unchosen" onClick={handleClose}>
            <Card className="coled css3frame-card-back-sidefade">
            <div className="rowed">
            <CardMedia
            image={props.Image}
            title={props.Name}
            className="item-plain"
            />
            <CardHeader
            title={props.Name}
            subheader={props.Description}
            />
            {/* Quests are dummied in w Ppl icons, b/c no game images exist; still crashing out on undefined Use values */}
            {props.Bundle &&
              <span>
              <img src={require('../img/'+props.Bundle.replace(/ /g, '_')+'.png')}
                className="item-border"
                alt={props.Bundle}
              />
              <h4>{
                props.Bundle
              }</h4>
              </span>
            }

            <CardContent>
              <div className="rowed">
                {/* name & price metadata */}
                <Typography variant="body1" color="textSecondary" component="p">Sells for: {props.SellPrice}g</Typography>
                { props.GivesEnergy
                  && <Typography variant="body1" color="textSecondary" component="p"> Energy: +{props.GivesEnergy}</Typography>
                }
                { props.GivesHealth
                  &&
                <Typography variant="body1" color="textSecondary" component="p"> Health: +{props.GivesHealth}</Typography>
                }
                  { props.Buff1 &&
                  <div className="coled">
                    <Typography variant="body2" color="textSecondary" component="p">Buff: {props.Buff1}</Typography>
                    { props.Buff2 && <Typography variant="body2" color="textSecondary" component="p">Buff #2: {props.Buff2}</Typography> }
                    { props.Buff3 && <Typography variant="body2" color="textSecondary" component="p">Buff #3: {props.Buff3}</Typography> }
                    { props.Buff4 && <Typography variant="body2" color="textSecondary" component="p">Buff #4: {props.Buff4}</Typography> }
                  </div>
                  }
                </div>
                <div className="">
                  <Typography variant="body2" color="textSecondary" component="p">
                  { props.Source1 && <span>via: {props.Source1}</span> }
                  {/* Only Queen of Sauce recipes have these props */}
                  {props.TV_Year && <span>&nbsp;{props.TV_Year}</span> }
                  {props.Episode_Number && <h5>(Episode #{props.Episode_Number})</h5> }
                  {/* We only want the heart to appear after NPCs,
                      so NOT entries starting w "The ".
                      This may count as the most Pythonic ES6 I've yet written :|
                   */}
                  { props.Source1 && !(props.Source1.charAt(0)==("T")) ? <span alt="poker-heart-emoji">♥</span> : <span></span>}
                  </Typography>
                </div>


              {/* Forage fields  */}
              {/* CSS class assigns background img based on .Location prop */}
              {props.Location &&
                <div className="">
                  {props.Season &&
                  <div>
                    <SeasonTile seasons={props.Season} />
                    <h5>{props.Season}</h5>
                  </div>
                  }
                  <h5>{props.Location}</h5>
                  {props.Location2 && <h5>& {props.Location2}</h5>}
                </div>
              }
              {/* prices across 4 quality lvls; needs own component */}
              { props.SellPrice &&
              <h4 className="prices_bar">
              {props.SellPrice}g
              <span>
                <img src={require('../img/star-silver.png')} /> <span>{Math.ceil(props.SellPrice*1.25)}g </span>
              </span>
              <span>
                <img src={require('../img/star-gold.png')} /> <span>{Math.ceil(props.SellPrice*1.5)}g </span>
              </span>
              <span>
                <img src={require('../img/star-iridium.png')} /> <span>{Math.ceil(props.SellPrice*2)}g </span>
              </span>
              </h4>
              }

              { props.Category=="forage" ?
              <h3>Forage</h3> : <></> }
              {props.AlsoType && <h3> (& {props.AlsoType})</h3>}

              {/* 3rd last --  Minerals metadata needs own component */}
              <span className="rowed row-spillover">
              {props.Type &&
                <span>Category: {props.Type} </span>
              }
              {props.Mine_Lvl &&
                <span>Mine Lvls: {props.Mine_Lvl} </span>
              }
              {props.Panning &&
                <span>Panning? {props.Panning} </span>
              }
              </span>
              {/* 2nd last --  needs own component */}
              {/* Quests are dummied in w Ppl icons, b/c no game images exist; still crashing out on undefined Use values */}
              {props.Uses &&
                <span className="rowed row-spillover">
                  {props.Uses && props.Uses.map(
                    (Use) => (
                      <span>
                      <img src={require('../img/'+Use.replace(/ /g, '_')+'.png')}
                        className="item-border"
                        alt={props.Use}
                      />
                      <h4>{
                        Use
                      }</h4>
                      </span>
                    )
                  )}
                  </span>
              }



              {/* FINAL */}
              {/* Recipe Ingredients -- needs own component */}
              {props.Ing1 &&
              <div className="rowed">
    	          <h3>Ingredients</h3>
                <div className="rowed">
                    <div>
                      <div className="coled">
                        <img src={require('../img/'+props.Ing1.replace(/ /g, '_')+'.png')}
                          className="item-border"
                          alt={props.Ing1}
                        />
                        <span> {props.Ing1}</span>
                      </div>
                    </div>
                  {props.Ing2 &&
                    <div className="">
                      <div className="coled">
                        <img src={require('../img/'+props.Ing2.replace(/ /g, '_')+'.png')}
                          className="item-border"
                          alt={props.Ing2}
                        />
                        <span> {props.Ing2}</span>
                      </div>
                    </div>
                  }
                  {props.Ing3 &&
                    <div className="">
                      <div className="coled">
                        <img src={require('../img/'+props.Ing3.replace(/ /g, '_')+'.png')}
                          className="item-border"
                          alt={props.Ing3}
                        />
                        <span> {props.Ing3}</span>
                      </div>
                    </div>
                  }
                  {props.Ing4 &&
                    <div className="">
                      <div className="coled">
                        <img src={require('../img/'+props.Ing4.replace(/ /g, '_')+'.png')}
                          className="item-border"
                          alt={props.Ing4}
                        />
                        <span> {props.Ing4}</span>
                      </div>
                    </div>
                  }
                </div>
              </div>
            }
            </CardContent>
            </div>
          </Card>
        </Menu>

      </div>
      </div>
    );
  }

export default PopupTile;
