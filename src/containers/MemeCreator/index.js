import React from 'react';
import { connect } from 'react-redux';
import { changePosition, searchAction, changeCaption, saveData ,clearData } from './action';
import Search from '../components/Search'

function MemeCreator(props) {
    const { loading, imageData, data } = props.MemeCreatorReducer;
    console.log('comming here>>>', props);
    const search = (query) => {
        props.dispatch(searchAction(query));
    };
    console.log('loading', loading, imageData);
    return (
        <div className="App">
            <React.Fragment>
                <div class="container">
                    <Search search={search} />

                    <div class="row">
                        <div className="memes-second-row">
                            {
                                !loading && imageData === null ? <div className="memes-img-No-data">No Data Found</div> : imageData && Object.keys(imageData).length ?

                                    <div className="memes-img-box">
                                        <img src={imageData.url} alt="main image" />
                                        {
                                            imageData.position === 'top' ? <div className="memes-top">{imageData && imageData.text}</div> : imageData.position === 'center' ? <div className="memes-center">{imageData && imageData.text}</div> : <div className="memes-bottom">{imageData && imageData.text}</div>
                                        }
                                    </div> : <div className="memes-img-No-data"> Loading</div>
                            }
                            {
                                <div className="memes-save-item">
                                    <div>Saved Meme</div>
                                    {
                                        data.map((d) => (
                                            // <div className="align-image">
                                            <React.Fragment>
                                                <div class="change">
                                            <img key={d.id} src={d.url} alt="saved image" />
                                            {/* <span className="textposition">{d.text}</span> */}
                                            {
                                            d.position === 'top' ? <span className="saved-memes-top">{d.text}</span> : d.position === 'center' ? <span className="saved-memes-center">{d.text}</span> : <span className="saved-memes-bottom">{d && d.text}</span>
                                        }
                                        </div>
                                            </React.Fragment>
                                            // </div>
                                        ))
                                    }
                                    {/* {
                             imageData.position === 'top' ? <div className="memes-top">{imageData && imageData.text}</div> : imageData.position === 'center' ?  <div className="memes-center">{imageData && imageData.text}</div> : <div className="memes-bottom">{imageData && imageData.text}</div>
                        } */}
                                </div>
                              

                            }
                              {/* <button onclick>Clear Save</button> */}
                        </div>
                        
                     
                    </div>

                    <div class="row">

                        <input onKeyUp={(e) => props.dispatch(changeCaption(e.target.value))} type="text" class="memes-caption" placeholder="Enter Your Caption Here" />

                        <div class="memes-adjust-text">
                            <div>
                                <input checked={imageData && imageData.position === 'top'} onChange={() => props.dispatch(changePosition('top'))} name="position" type="radio" />
                                <span>Top</span>
                            </div>
                            <div>
                                <input checked={imageData && imageData.position === 'center'} onChange={() => props.dispatch(changePosition('center'))} name="position" type="radio" />
                                <span>center</span>
                            </div>
                            <div>
                                <input checked={imageData && imageData.position === 'bottom'} onChange={() => props.dispatch(changePosition('bottom'))} name="position" type="radio" />
                                <span>Bottom</span>
                            </div>
                        </div>


                    </div>
                    <div style={{ float: 'left' }}>
                        <button onClick={() => props.dispatch(saveData())} id="memes-save">Save Meme</button>

                    </div>
                    <div class="row">
                    <button className="clear-save-menu"  onClick={() => props.dispatch(clearData())} >Clear Saved Meme</button>
                    </div>


                </div>

            </React.Fragment>

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
