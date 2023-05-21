/// <reference types="vitest/globals" />
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { server } from '../mocks/server'
import { afterAll, afterEach, beforeAll } from 'vitest'

beforeAll(() => server.listen({ onUnhandledRequest: `error` }))
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
