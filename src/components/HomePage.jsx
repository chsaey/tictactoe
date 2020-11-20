import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

function HomePage(props) {
  return (
    <header class="masthead">
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase text-black font-weight-bold">TIC TAC TOE</h1>
                <hr class="divider my-4" />
            </div>
            <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 font-weight-light mb-5">ARE YOU READY TO PLAY?</p>
                <Link to='/Game'><Button>PLAY</Button></Link>
            </div>
        </div>
    </div>
</header>

  );
}

  export default HomePage