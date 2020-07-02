import React from 'react';


class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        const covers = (
            <div className='landing-covers'>
                <button className='landing-cover' onClick={this.handleClick}>
                    <img src='https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/Kehlani.jpg'/>
                </button>
                <button className='landing-cover' onClick={this.handleClick}>
                    <img src='https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/Tame_Impala.jpg'/>
                </button>
                <button className='landing-cover' onClick={this.handleClick}>
                    <img src='https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/tyler-the-creator-igor-cover.png'/>
                </button>
                <button className='landing-cover' onClick={this.handleClick}>
                    <img src='https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/Colores_J+Balvin.jpg'/>
                </button>
                <button className='landing-cover' onClick={this.handleClick}>
                    <img src='https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/dragonballdurag.jpg'/>
                </button>
                <button className='landing-cover' onClick={this.handleClick}>
                    <img src='https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/joey.png'/>
                </button>
                <button className='landing-cover' onClick={this.handleClick}>
                    <img src='https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/badbunny/YHLQMDLG_Bad+Bunny.jpg'/>
                </button>
                <button className='landing-cover' onClick={this.handleClick}>
                    <img src='https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/070-Shake-Modus-Vivendi.jpg'/>
                </button>
            </div>
        )
        return (
            <div className='landing-div'>
                <div className='landing-banner'>
                    <div className='landing-banner-content'>
                        <h1>Discover more with CloudSound</h1>
                        <p>CloudSound is the fastest growing music community,</p> 
                        <p>where you stream the latest music add-free.</p>
                        <span className='landing-banner-btns'>
                            <a className='banner-link-blk' href="https://www.linkedin.com/in/marquisbentley/">Meet the Creator</a>
                            <button className='landing-btn-orn'>Signup for free</button>
                        </span>
                    </div>
                </div>
                <div className='landing-trending'>
                    <h1>Hear what’s trending for free in the CloudSound community</h1>
                    {covers}
                </div>
                <div className='landing-mobile-app'></div>
                <div className='landing-closing'></div>
            </div>
        )
    }
}

export default Landing;