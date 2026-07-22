import React from 'react'

const WithLoading = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                isLoading: true
            }
        }

        componentDidMount(){
            //simulating an async operation, like fetching data
            setTimeout(() => {
                this.setState({
                    isLoading: false
                })
            },1000);
        }

        render(){
            if(this.state.isLoading){
                return <div>Loading...</div>;
            }
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default WithLoading
