import React from 'react';
import { connect } from 'react-redux';
import { demoAction } from './action';

function MemeCreator(props) {
  console.log('props', props);
  return (
    <div className="App">
       <React.Fragment>
            <div class="container">
                
        <div class="row">
                    <input id="memes_query_text" type="text" placeholder="Enter Your Search Query Here" />
                    <button id="memes-load-img">Load Image</button>
                </div>
            
        <div class="row">
                    <div class="memes-second-row">
                        <div class="memes-img-box">
                            <img alt="main image"/>
                                <div class="memes-top">top</div>
                                <div class="memes-center">center</div>
                                <div class="memes-bottom">bottom</div>
                </div>
                            <div class="memes-save-item">
                                <div>Saved Meme</div>
                                <img alt="ig" />
                                <img alt="ig" />
                                <img alt="ig" />
                                <img alt="ig" />
                                <img alt="ig" />
                                <img alt="ig" />
                                <img alt="ig" />
                                <img alt="ig" />



                            </div>
                        </div>
                    </div>
                   
        <div class="row">

                        <input type="text" class="memes-caption" placeholder="Enter Your Caption Here" ></input>

                        <div class="memes-adjust-text">
                            <div>
                                <input type="radio"></input>
                                    <span>Top</span>
                </div>
                                <div>
                                    <input type="radio"></input>
                                        <span>center</span>
                </div>
                                    <div>
                                        <input type="radio"></input>
                                            <span>Bottom</span>
                </div>
                                    </div>


                                </div>
                                <div>
                                    <button id="memes-save">Save Meme</button>
                                </div>


                            </div>

        </React.Fragment>
      Meme Creator
      <button onClick={() => props.dispatch(demoAction())}>Demo</button>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = (dispatch) => {
    return {
      dispatch,
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(MemeCreator);
