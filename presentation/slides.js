import React, { Component } from 'react';

import { Appear, BlockQuote, Cite, Code, CodePane, Deck, Fit, Fill, Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import { ContactForm } from './contact-form';
import { ClickCounter } from './click-counter';
import { RefExample } from './examples/refs/example';
import { ChildrenExample } from './examples/children/example';

const images = {
  logo: require('../assets/logo.svg'),
  avatar: require('../assets/avatar.jpeg')
};

preloader(images);

export class FrontSlide extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Image src={ images.logo } />
        <Heading size={ 1 }
                 fit
                 caps
                 lineHeight={ 1 }
                 textColor="black">
          React + Redux
        </Heading>
        <Heading bold
                 caps
                 textColor="tertiary"
                 size={ 8 }>
          January 2016
        </Heading>
        <Layout>
          <Fill>
            <Image margin="40px"
                   src={ images.avatar }
                   width={ 75 }
                   style={ {  borderRadius: '50%'} } />
          </Fill>
        </Layout>
      </div>
      )
  }
}

export class StatefulComponentsSlide extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Heading size={ 2 }
                 fit
                 caps
                 textColor="secondary"
                 textFont="primary">
          Stateful components
        </Heading>
        <Layout>
          <Fill>
            <CodePane lang="jsx"
                      source={ require('!!raw!./contact-form') } />
          </Fill>
          <Fill>
            <ContactForm />
          </Fill>
        </Layout>
      </div>
      )
  }
}

export class StatelessFunctionsSlide extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Heading size={ 2 }
                 fit
                 caps
                 textColor="secondary"
                 textFont="primary">
          Stateless functions
        </Heading>
        <Layout>
          <Fill>
            <CodePane lang="jsx"
                      source={ require('!!raw!./click-counter') } />
          </Fill>
          <Fill>
            <ClickCounter />
          </Fill>
        </Layout>
      </div>
      );
  }
}

export class ComponentLifecycleSlide extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Heading size={ 2 }
                 fit
                 caps
                 textColor="secondary"
                 textFont="primary">
          Component lifecycle
        </Heading>
        <List>
          <ListItem>
            componentWillMount()
          </ListItem>
          <ListItem>
            componentDidMount()
          </ListItem>
          <ListItem>
            componentWillReceiveProps(nextProps)
          </ListItem>
          <ListItem>
            shouldComponentUpdate(nextProps, nextState)
          </ListItem>
          <ListItem>
            componentWillUpdate(nextProps, nextState)
          </ListItem>
          <ListItem>
            componentDidUpdate(prevProps, prevState)
          </ListItem>
          <ListItem>
            componentWillUnmount()
          </ListItem>
        </List>
      </div>
      );
  }
}

export class PassDataSlide extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Heading size={ 4 }
                 caps
                 textColor="secondary"
                 textFont="primary">
          How to get data in?
        </Heading>
        <Text textColor="secondary">
          Use props!
        </Text>
        <CodePane lang="jsx"
                  source={ require('!!raw!./examples/pass-props/pass') }
                  margin="20px auto" />
        <CodePane lang="jsx"
                  source={ require('!!raw!./examples/pass-props/receive') }
                  margin="20px auto" />
              </div>
      );
  }
}


export class GetDataSlide extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Heading size={ 4 }
                 caps
                 textColor="secondary"
                 textFont="primary">
          How to get data out?
        </Heading>
        <Text textColor="secondary">
          Use callbacks in props!
        </Text>
        <CodePane lang="jsx"
                  source={ require('!!raw!./examples/get-data/pass') }
                  margin="20px auto" />
        <CodePane lang="jsx"
                  source={ require('!!raw!./examples/get-data/receive') }
                  margin="20px auto" />
      </div>
      )
  }
}

export class RefsSlide extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Heading size={ 4 }
                 caps
                 textColor="secondary"
                 textFont="primary">
          How to find data in your component?
        </Heading>
        <Text textColor="secondary">
          Use refs
        </Text>
        <Layout>
          <Fill>
            <CodePane lang="jsx"
                      source={ require('!!raw!./examples/refs/example') }
                      margin="20px auto" />
          </Fill>
          <Fill>
            <RefExample />
          </Fill>
        </Layout>
      </div>
      )
  }
}

export class ChildrenSlide extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Heading size={ 4 }
          caps
          textColor="secondary"
          textFont="primary">
          Children
        </Heading>
        <Text textColor="secondary">
          Dynamic stuff
        </Text>
        <Layout>
          <Fill>
            <CodePane lang="jsx"
                      source={ require('!!raw!./examples/children/example') }
                      margin="20px auto" />
          </Fill>
          <Fill>
            <ChildrenExample />
          </Fill>
        </Layout>
      </div>
      )
  }
}

export class FragmentSlide extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Heading size={ 4 }
          caps
          textColor="secondary"
          textFont="primary">
          Lists & Fragments
        </Heading>

        <Layout>
          <Fill>
            <CodePane lang="jsx"
                      source={ require('!!raw!./examples/children/example') }
                      margin="20px auto" />
          </Fill>
          <Fill>
            <ChildrenExample />
          </Fill>
        </Layout>
      </div>
      )
  }
}
