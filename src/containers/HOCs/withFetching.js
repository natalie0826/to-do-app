import React from 'react';

import { Loading } from '../../components/Loading';

export const withFetching = (urls) => (ComposedComponent) =>
    class withFetching extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: false,
                error: null,
                data: []
            };
        }

        componentDidMount() {
            this.setState({loading: true});
            Promise.all(urls.map((url) => {
                return fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong...');
                    }
                })
                .then((data) => {
                    return data;
                })
            }))
            .then((finalDataArray) => {
                this.setState({
                    loading: false,
                    data: finalDataArray
                });
            })
            .catch((error) => this.setState({
                error,
                loading: false
            }));
        }

        render() {
            const { data, loading, error } = this.state;

            if (error) {
                return <p>{error.message}</p>
            }

            if (loading) {
                return <Loading loading={this.state.loading} />;
            }

            return (<ComposedComponent data={data} />);
        }
    }