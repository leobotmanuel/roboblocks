
'use strict';
/* global Blockly,  RoboBlocks */
/* jshint sub:true */

  /**
  * variables_global code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.variables_global = function() {
  // Variable setter.
    var varType;
    var varValue=Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    // varValue='digitalRead(';
    // console.log('aaaaaaaaaaaaaaaa', varValue, varValue.search('digitalRead'));
    // console.log(varValue.search('digitalRead'),varValue.search('digitalRead')>0);
    var varName = this.getFieldValue('VAR')||'';


    if ( (varValue.search('analogRead')>=0) || (varValue.search('digitalRead')>=0) || (varValue.search('Distanc')>=0) || (!isNaN(parseFloat(varValue))) ){
        varType='int';
        Blockly.Arduino.definitions_['declare_var'+varName]=varType+' '+varName+';';
        Blockly.Arduino.setups_['define_var'+varName]=varName+'='+varValue+';';
    }
    if (varValue[0]==='{'){
        varType='int ';
        Blockly.Arduino.definitions_['declare_var'+varName]=varType+' '+varName+' []='+varValue+';';
    }
    else {
        varType='String';
        Blockly.Arduino.definitions_['declare_var'+varName]=varType+' '+varName+';';
        Blockly.Arduino.setups_['define_var'+varName]=varName+'='+varValue+';';
    }

    // console.log('varType', varType);




    
    return '';
};


Blockly.Blocks.variables_global = {
  // Variable setter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'),  // Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/variables_global',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL'))
            .appendField(new Blockly.FieldTextInput(''), 'VAR');

        this.appendValueInput('VALUE')
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));

        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_TOOLTIP'));
    },
    getVars: function() {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setFieldValue(newName, 'VAR');
        }
    }
};
