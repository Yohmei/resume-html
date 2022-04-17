import { Router } from '@reach/router'
import React from 'react'
import { addPrefetchExcludes, Root, Routes } from 'react-static'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes([])

function App() {
  return (
    <Root>
      <div className='content'>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path='*' />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
