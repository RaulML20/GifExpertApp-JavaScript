import {Box, Grid} from '@material-ui/core';

function GifExpertApp(){
    return(
        <div className="GifExpertApp">
            <Grid container className={GifExpertApp} justifyContent="center" alignItems="center" spacing={4}>
                <h1>This is the title</h1>
                <h2>This is a subtitle</h2>
            </Grid>
        </div>
    );
}

export default GifExpertApp