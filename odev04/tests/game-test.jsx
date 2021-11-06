const React = require('react')
const {mount} = require('enzyme')
const {game} = require('../src/game')
const { exportAllDeclaration } = require('@babel/types')

const checkAnimals = (driver) =>{
    const games = driver.find('.kart');
    expect(games.length).toEqual(3);   
    
}

test('oyun oluşturuldu',()=>{
    const driver = mount(<game/>)  ; 
    checkAnimals(driver);
    
    
})  