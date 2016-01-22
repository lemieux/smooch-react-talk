// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Spectacle, Slide } from 'spectacle';


// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import * as slides from './slides';

const theme = createTheme({
  primary: '#92278f',
  secondary: 'white'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={ theme }>
        <Deck transition={ ['zoom', 'slide'] }
              transitionDuration={ 500 }>
          <Slide transition={ ['zoom'] }>
            <slides.FrontSlide />
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="stateful-components"
                 notes="You should not try to access elements inside your children components. Let them decide when you bubble that data up to you.">
            <slides.StatefulComponentsSlide />
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="stateless-functions">
            <slides.StatelessFunctionsSlide />
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="component-lifecycle"
                 notes="<a style='color:white;' href='https://facebook.github.io/react/docs/component-specs.html' target='_blank'>https://facebook.github.io/react/docs/component-specs.html</a>">
            <slides.ComponentLifecycleSlide />
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="pass-data">
            <slides.PassDataSlide />
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="get-data"
                 notes="You should not try to access elements inside your children components. Let them decide when you bubble that data up to you.">
            <slides.GetDataSlide />
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="refs"
                 notes="Refs are available outside of the component, but don't use them... you're not supposed to know what's going on in there!">
            <slides.RefsSlide />
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="children">
            <slides.ChildrenSlide />
          </Slide>
          <Slide transition={ ['zoom', 'fade'] }
                 id="fragments">
            <slides.FragmentSlide />
          </Slide>
        </Deck>
      </Spectacle>
      );
  }
}
