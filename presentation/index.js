// Import React
import React from 'react';

// Import Spectacle Core tags
import { Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text } from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import {ContactForm} from './contact-form';


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
                <Deck transition={ ['zoom', 'slide'] } transitionDuration={ 500 }>
                    <Slide transition={ ['zoom'] } bgColor="primary">
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
                                    style={ {    borderRadius: '50%'} } />
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide transition={ ['slide'] } id="test" notes="You can even put notes on your slide. How awesome is that?">
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
                        Can be HTML, Android component, pretty much anything (or nothing).
                        </Text>
                    </Slide>
                    <Slide transition={ ['zoom', 'fade'] }>
                        <Heading size={ 2 }
                            caps
                            textColor="secondary"
                            textFont="primary">
                            Stateful components
                        </Heading>
                        <Layout fit>
                            <Fill>
                                <CodePane lang="jsx" source={ require('!!raw!./contact-form') } margin="20px auto" />
                            </Fill>
                            <Fill>
                                <ContactForm />
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide transition={ ['slide'] } bgImage={ images.city.replace('/', '') } bgDarken={ 0.75 }>
                        <Appear fid="1">
                            <Heading size={ 1 }
                                     caps
                                     fit
                                     textColor="primary">
                                Full Width
                            </Heading>
                        </Appear>
                        <Appear fid="2">
                            <Heading size={ 1 }
                                     caps
                                     fit
                                     textColor="tertiary">
                                Adjustable Darkness
                            </Heading>
                        </Appear>
                        <Appear fid="3">
                            <Heading size={ 1 }
                                     caps
                                     fit
                                     textColor="primary">
                                Background Imagery
                            </Heading>
                        </Appear>
                    </Slide>
                    <Slide transition={ ['zoom', 'fade'] } bgColor="primary">
                        <Heading caps fit>
                            Flexible Layouts
                        </Heading>
                        <Layout>
                            <Fill>
                                <Heading size={ 4 }
                                         caps
                                         textColor="secondary"
                                         bgColor="white"
                                         margin={ 10 }>
                                    Left
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={ 4 }
                                         caps
                                         textColor="secondary"
                                         bgColor="white"
                                         margin={ 10 }>
                                    Right
                                </Heading>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide transition={ ['slide'] } bgColor="black">
                        <BlockQuote>
                            <Quote>
                                Wonderfully formatted quotes
                            </Quote>
                            <Cite>
                                                                        Ken Wheeler
            </Cite>
                        </BlockQuote>
                    </Slide>
                    <Slide transition={ ['slide', 'spin'] } bgColor="primary">
                        <Heading caps
                                 fit
                                 size={ 1 }
                                 textColor="tertiary">
                            Smooth
                        </Heading>
                        <Heading caps
                                 fit
                                 size={ 1 }
                                 textColor="secondary">
                            Combinable Transitions
                        </Heading>
                    </Slide>
                    <Slide transition={ ['fade'] } bgColor="secondary" textColor="primary">
                        <List>
                            <Appear>
                                <ListItem>
                                    Inline style based theme system
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>
                                    Autofit text
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>
                                    Flexbox layout system
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>
                                    React-Router navigation
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>
                                    PDF export
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>
                                    And...
                                </ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide transition={ ['slide'] } bgColor="primary">
                        <Heading size={ 1 }
                                 caps
                                 fit
                                 textColor="tertiary">
                            Your presentations are interactive
                        </Heading>
                        <Interactive/>
                    </Slide>
                    <Slide transition={ ['spin', 'slide'] } bgColor="tertiary">
                        <Heading size={ 1 }
                                 caps
                                 fit
                                 lineHeight={ 1.5 }
                                 textColor="primary">
                            Made with love in Seattle by
                        </Heading>
                        <Link href="http://www.formidablelabs.com">
                        <Image width="100%" src={ images.logo } />
                        </Link>
                    </Slide>
                </Deck>
            </Spectacle>
            );
    }
}
