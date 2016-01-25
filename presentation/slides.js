import React, { Component } from 'react';

import { Appear, BlockQuote, Cite, Code, CodePane, Fit, Fill, Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Text, S } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import { ContactForm } from './contact-form';
import { ClickCounter } from './click-counter';
import { RefExample } from './examples/refs/example';
import { ChildrenExample } from './examples/children/example';
import { FragmentsExample } from './examples/fragments/example';

const images = {
  logo: require('../assets/logo.svg'),
  avatar: require('../assets/avatar.jpeg')
};

preloader(images);

export function FrontSlide(props) {
  return (
    <div>
      <Image src={ images.logo } />
      <Heading size={ 1 }
               fit
               caps
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

export function StatefulComponentsSlide(props) {
  return (
    <div>
      <Heading size={ 1 }
               fit
               caps
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

export function StatelessFunctionsSlide(props) {
  return (
    <div>
      <Heading size={ 1 }
               fit
               caps
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

export function ComponentLifecycleSlide(props) {
  return (
    <div>
      <Heading size={ 1 }
               caps
               fit
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

export function PassDataSlide(props) {
  return (
    <div>
      <Heading size={ 1 }
               caps
               fit
               textFont="primary">
        How to get data in?
      </Heading>
      <Text>
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


export function GetDataSlide(props) {
  return (
    <div>
      <Heading size={ 1 }
               caps
               fit
               textFont="primary">
        How to get data out?
      </Heading>
      <Text>
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

export function RefsSlide(props) {
  return (
    <div>
      <Heading size={ 1 }
               caps
               fit
               textFont="primary">
        How to find data in your component?
      </Heading>
      <Text>
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

export function ChildrenSlide(props) {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont="primary">
        Children
      </Heading>
      <Text>
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

export function FragmentSlide(props) {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont="primary">
        Lists & Fragments
      </Heading>
      <Text textColor='secondary'>
        Parts of the UI can be generated on the side
      </Text>
      <Layout>
        <Fill>
          <CodePane lang="jsx"
                    source={ require('!!raw!./examples/fragments/example') }
                    margin="20px auto" />
        </Fill>
        <Fill>
          <FragmentsExample />
        </Fill>
      </Layout>
    </div>
    )
}


export function PropsValidationSlide(props) {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont="primary">
        Props validation
      </Heading>
      <Text textColor='secondary'>
        TODO
      </Text>
    </div>
    )
}

export function ReactSlide() {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont="primary">
        React
      </Heading>
      <Text>
        The view part
      </Text>
    </div>
    )
}

export function ReduxSlide() {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont="primary">
        Redux
      </Heading>
      <Text>
        The data part
      </Text>
    </div>
    )
}

export function ReduxIntroSlide() {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont="primary">
        Principles
      </Heading>
      <div style={ {  textAlign: 'left'} }>
        <Heading size={ 5 }
                 textColor='secondary'
                 textFont="primary">
          Only source of truth
        </Heading>
        <Text>
          <span>The state of your whole application is stored in an object tree within a single</span>
          <S type="underline">
            store
    </S>.
        </Text>
        <Heading size={ 5 }
                 textColor='secondary'
                 textFont="primary">
          State is read-only
        </Heading>
        <Text>
          <span>The only way to mutate the state is to emit an</span>
          <S type="underline">
            action
    </S>, an object describing what happened.
        </Text>
        <Heading size={ 5 }
                 textColor='secondary'
                 textFont="primary">
          Changes are made with pure functions
        </Heading>
        <Text>
          <span>To specify how the state tree is transformed by actions, you write pure</span>
          <S type="underline">
            reducers
    </S>.
        </Text>
      </div>
    </div>
    )
}

export function ActionsSlide() {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont='primary'>
        Actions
      </Heading>
      <Text>
        <span>Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using</span>
        <Code>
        store.dispatch()
    </Code>
        <span>.</span>
      </Text>
      <CodePane lang="js"
                source={ require('!!raw!./examples/actions/definition') }
                margin="20px auto" />
      <CodePane lang="js"
                source={ require('!!raw!./examples/actions/action') }
                margin="20px auto" />
    </div>
    );
}

export function ActionCreatorsSlide() {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont='primary'>
        Action Creators
      </Heading>
      <Text>
        Action creators are functions that create actions.
      </Text>
      <Text>
        Let's reduce the boilerplate.
      </Text>
      <CodePane lang="js"
                source={ require('!!raw!./examples/action-creators/definition') }
                margin="20px auto" />
      <CodePane lang="js"
                source={ require('!!raw!./examples/action-creators/usage') }
                margin="20px auto" />
    </div>
    );
}

export function ReducersSlide() {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont='primary'>
        Reducers
      </Heading>
      <Text>
        Actions describe the fact that something happened, but don’t specify how the application’s state changes in response.
      </Text>
      <Text>
        This is the job of a reducer.
      </Text>
      <CodePane lang="js"
                source={ require('!!raw!./examples/reducers/definition') }
                margin="20px auto" />
    </div>
    );
}

export function StoreSlide() {
  return (
    <div>
      <Heading size={ 1 }
               caps
               textFont='primary'>
        Store
      </Heading>
      <Text>
        The store is where all the data logic lives. Reducers define how the data will be structured in the store.
      </Text>
      <CodePane lang="js"
                source={ require('!!raw!./examples/store/simple') }
                margin="20px auto" />
      <Text>
        You could have only one reducer and have a big ass switch statement to handle your actions... or you could use reducer composition.
      </Text>
    </div>
    );
}



export function ReducerCompositionSlide() {
  return (
    <div>
      <Heading size={ 1 }
               caps
               fit
               textFont='primary'>
        Reducer composition
      </Heading>
      <Text>
        This helps you keep your reducers small and understandable.
      </Text>
      <CodePane lang="js"
                source={ require('!!raw!./examples/store/composed') }
                margin="20px auto" />
      <Text>
        Each reducer will nest its state under a given key.
      </Text>
    </div>
    );
}
