#Notes

## jest.toMatchInlineSnapshot
A matcher for self updating testing outputs each time source has been updated, on next run test fails and will ask to update snapshot.

`npm test -- -u`

##setupFilesAfterEnv
this option in jest.config runs some code immediately after the test framework has been installed in the environment but before the test code itself.

`import * as jestDOM from @testing-library/jest-dom/extend-expect"
expect.extend(jestDOM)`

above block can be replaced on setup

`setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']`

#Pending
below are pending to be extended because maybe react-script has a different solution
- split jest config by projects
- install jest watch plugin and typeahead plugin
- run tests by last commit