import * as React from 'react';

interface SettingsProps { size: Array<number>; }

class Settings extends React.Component<SettingsProps> {

  submitForm = (e: Event) => {
    e.preventDefault();
    
  }
  
  render() {
    return (
      <div>
        <form action="#">
          <div>
            <label htmlFor="wf">Width Field</label>
            <input id="wf" type="text" value={this.props.size[0]} />
          </div>
          <div>
            <label htmlFor="hf">Height Field</label>
            <input id="hf" type="text" value={this.props.size[1]}/>
          </div>
          <div>
            <input type="submit" value="Submit settings"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;
