import React from 'react';

const closePopup = () => {
    document.getElementById("install").style.display = 'none';
}

const InstallPrompt = () => (
    <div id="install" style={{ display: 'none', padding: '0.5em 1em 0.5em 1em', height: '4em', justifyContent: 'space-between' }} className="alert alert-info" role="alert">
        <span style={{ lineHeight: '2.5em', fontSize: '1.1em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Install our app now!</span>
        <button id="install-button" className="btn btn-info" style={{ padding: '0.3em' }}>Add to homescreen</button>
        <button className="btn bg-transparent" onClick={closePopup}><i style={{ color: 'grey' }} className="fa fa-close"></i></button>
    </div>
)

export default InstallPrompt;