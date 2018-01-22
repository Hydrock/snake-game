import * as React from 'react';

import { setFormSize } from '../../actions/index';

interface SettingsProps { 
  size: {
    width: number;
    height: number;
  };
}

interface SettingsState { width: number; height: number; }

class Settings extends React.Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props);
    this.state = {
        width: this.props.size.width,
        height: this.props.size.height
    };
  }

  submitForm = (e: Event) => {
    e.preventDefault();
  }

  onChangeWidth = (e: React.FormEvent<HTMLInputElement> ) => {
    this.setState({
      width: Number(e.currentTarget.value)
    });

    // setFormSize({
    //   width: Number(e.currentTarget.value),
    //   height: this.state.height
    // });
  }

  onChangeHeight = (e: React.FormEvent<HTMLInputElement> ) => {
    this.setState({
      height: Number(e.currentTarget.value)
    });

    // setFormSize({
    //   width: this.state.width,
    //   height: Number(e.currentTarget.value)
    // });
  }

  updateStore = (e: any) => {
    e.preventDefault();
    console.log(this.state);
    setFormSize({
      width: this.state.width,
      height: this.state.height,
    });
  }
  
  render() {
    return (
      <div>
        <form action="#" onSubmit={this.updateStore}>
          <div>
            <label htmlFor="wf">Width Field</label>
            <input id="wf" type="text" defaultValue={this.state.width.toString()} onChange={this.onChangeWidth} />
          </div>
          <div>
            <label htmlFor="hf">Height Field</label>
            <input id="hf" type="text" defaultValue={this.state.height.toString()} onChange={this.onChangeHeight}/>
          </div>
          <div>
            <input type="submit" value="Submit settings"  />
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;
