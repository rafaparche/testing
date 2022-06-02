function expect(result){
  return {
    toBeEqual(expected) {
      if (result != expected) {
        throw new Error(`${result} does not match with ${expected}`)
      }
    }
  }
}

async function test(title, callback) {
  try {
    await callback();
    console.info(`✓ ${title}` )
  } catch (e) {
    console.info(`x ${title}`)
    console.error(e)
  }
}

global.test = test
global.expect = expect
