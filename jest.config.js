module.exports={
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/lib/test/__mocks__/styleMock.js',
    '\\.(css|less)$': '<rootDir>/lib/test/__mocks__/styleMock.js'
  },
  testPathIgnorePatterns: ['./node_modules/'],
}