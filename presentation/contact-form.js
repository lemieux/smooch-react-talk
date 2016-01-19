import React, { Component } from 'react';

export class ContactForm extends Component {
    render() {
        const styles = {
            label: {
                marginRight: 30
            }
        };

        return (
            <form>
                <div>
                    <label style={ styles.label }>
                        First name
                    </label>
                    <input ref="firstName" defaultValue={ this.props.firstName } />
                </div>
                    <div>
                        <label style={ styles.label }>
                            Last name
                        </label>
                        <input ref="lastName" defaultValue={ this.props.lastName } />
                    </div>
                        <div>
                            <label style={ styles.label }>
                                Email
                            </label>
                            <input ref="email" defaultValue={ this.props.email } />
                        </div>
            </form>
        );
    }
}
