import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
     


      <div className="container mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="jumbotron" >
                <h1 className="display-4">Add a new file</h1>
                <hr />
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                  <input type="file" onChange={this.props.captureFile} />
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control"
                            placeholder="Add description for the file"
                            required />
                            
                      </div>
                      
                    
                    <br/>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
              </div>

              
              <p>&nbsp;</p>


              


              

                  <div className="row">
              
                { this.props.files.map((file, key) => {
                  return(
                    

                    <div class="card mr-2 mb-2" style={{"width": "23%"}}>
                    <div class="card-body">
                      <h5 class="card-title">{file.fileName}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{file.fileDescription}</h6>
                      <p class="card-text">{file.fileType}</p>
                      <p class="card-text">{convertBytes(file.fileSize)}</p>
                      <p class="card-text">{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</p>
                      <a    class="card-link"
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                          <a class="card-link"
                          href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                          rel="noopener noreferrer"
                          target="_blank">
                          {file.fileHash.substring(0,10)}...
                        </a>
                    </div>
                  </div>  
                    
                    
                  )
                })}
                </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;