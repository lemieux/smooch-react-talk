// Import React
import React from 'react';

// Import Spectacle Core tags
import { Appear, BlockQuote, Cite, CodePane, Deck, Fit, Fill, Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text } from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import { ContactForm } from './contact-form';
import { ClickCounter } from './click-counter';


const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/logo.svg'),
  avatar: require('../assets/avatar.jpeg'),
  markdown: require('../assets/markdown.png')
};

preloader(images);

const theme = createTheme({
  primary: '#92278f'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={ theme }>
        <Deck transition={ ['zoom', 'slide'] }
              transitionDuration={ 500 }>
          <Slide transition={ ['zoom'] }
                 bgColor="primary">
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
          </Slide>
          <Slide transition={ ['slide'] }
                 id="what-is-react"
                 notes="React is a library, it is not a framework">
            <Heading size={ 2 }
                     caps
                     textColor="secondary"
                     textFont="primary">
              What is React?
            </Heading>
            <Text margin="30px auto">
              React is basically just the view layer of your application.
            </Text>
            <Text margin="30px auto">
              Components take props in input and render "something" in output.
            </Text>
            <Text margin="30px auto">
              Can be HTML, Android component, pretty much anything (or even nothing).
            </Text>
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="stateful-components">
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
                          source={ require('!!raw!./contact-form') }
                          margin="20px auto" />
              </Fill>
              <Fill>
                <ContactForm />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="stateless-functions">
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
                          source={ require('!!raw!./click-counter') }
                          margin="20px auto" />
              </Fill>
              <Fill>
                <ClickCounter />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={ ['slide'] }
                 id="component-lifecycle"
                 notes="<a href='https://facebook.github.io/react/docs/component-specs.html' target='_blank'>https://facebook.github.io/react/docs/component-specs.html</a>">
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
          </Slide>
        </Deck>
      </Spectacle>
      );
  }
}
