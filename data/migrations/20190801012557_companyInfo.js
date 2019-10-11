exports.up = function(knex) {
  return knex.schema.createTable('companies', table => {
    table.increments();

    table
      .integer('Company_ID')
      .unique()
      .notNullable();

    table
      .string('Date', 128)
      .notNullable();

    table
      .float('vix_high')
      .notNullable();

    table
      .float('vix_low')
      .notNullable();

      table
      .float('vix_open')
      .notNullable();

      table
      .float('vix_close')
      .notNullable();

      table
      .float('gspc_high')
      .notNullable();

      table
      .float('gspc_low')
      .notNullable();

      table
      .float('gspc_open')
      .notNullable();

      table
      .float('gspc_close')
      .notNullable();

      table
      .float('gspc_volume')
      .notNullable();

      table
      .float('gspc_adj_close')
      .notNullable();

      table
      .float('3 MO')
      .notNullable();

      table
      .float('6 MO')
      .notNullable();

      table
      .float('1 YR')
      .notNullable();

      table
      .float('2 YR')
      .notNullable();

      table
      .float('3 YR')
      .notNullable();

      table
      .float('5 YR')
      .notNullable();

      table
      .float('7 YR')
      .notNullable();

      table
      .float('10 YR')
      .notNullable();

      table
      .float('30 YR')
      .notNullable();

      table
      .boolean('3m1s_inversion')
      .notNullable();

      table
      .boolean('3m2s_inversion')
      .notNullable();

      table
      .boolean('2s10s_inversion')
      .notNullable();

      table
      .boolean('2s30s_inversion')
      .notNullable();

      table
      .string('y/m', 128)
      .notNullable();

      table
      .float('lag_index_level')
      .notNullable();

      table
      .float('lag_index_growth')
      .notNullable();

      table
      .float('fred')
      .notNullable();

      table
      .float('ism')
      .notNullable();

      table
      .float('gdp_cury')
      .notNullable();

      table
      .float('mom_ao')
      .notNullable();

      table
      .float('mom_mf')
      .notNullable();

      table
      .float('mom_rsi')
      .notNullable();

      table
      .float('mom_stoch')
      .notNullable();

      table
      .float('mom_st_sig')
      .notNullable();

      table
      .float('mom_tsi')
      .notNullable();

      table
      .float('mom_uo')
      .notNullable();

      table
      .float('mom_wr')
      .notNullable();

      table
      .float('vol_adi')
      .notNullable();

      table
      .float('vol_cmf')
      .notNullable();

      table
      .float('vol_eom')
      .notNullable();

      table
      .float('vol_fm')
      .notNullable();

      table
      .float('vol_nvi')
      .notNullable();

      table
      .float('vol_obv')
      .notNullable();

      table
      .float('vol_vpt')
      .notNullable();

      table
      .float('atr_low')
      .notNullable();

      table
      .float('atr_high')
      .notNullable();

      table
      .float('percent_move')
      .notNullable();

      table
      .float('stdev')
      .notNullable();

      table
      .float('3_sigma_event')
      .notNullable();

      table
      .float('vix_move')
      .notNullable();

      table
      .float('gspc_move')
      .notNullable();
  });
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists('companies');
};