

const cub_el = document.getElementById("cub");
const area_const_aberta_el = document.getElementById("area_const_aberta");
const equivalencia_aberta_el = document.getElementById("equivalencia_aberta");
const area_const_coberta_el = document.getElementById("area_const_coberta");
const equivalencia_coberta_el = document.getElementById("equivalencia_coberta");
const area_const_fechada_el = document.getElementById("area_const_fechada");
const equivalencia_fechada_el = document.getElementById("equivalencia_fechada");
const acrescimo_el = document.getElementById("acrescimo");
const acrescimo_direto_el = document.getElementById("acrescimo_direto");
const area_res_aberta_priv_el = document.getElementById("area_res_aberta_priv");
const vgv_res_aberta_priv_el = document.getElementById("vgv_res_aberta_priv");
const area_res_coberta_priv_el = document.getElementById("area_res_coberta_priv");
const vgv_res_coberta_priv_el = document.getElementById("vgv_res_coberta_priv");
const area_res_fechada_priv_el = document.getElementById("area_res_fechada_priv");
const vgv_res_fechada_priv_el = document.getElementById("vgv_res_fechada_priv");
const area_comercial_el = document.getElementById("area_comercial");
const vgv_com_el = document.getElementById("vgv_com");
const acrescimo_direto_vgv_el = document.getElementById("acrescimo_direto_vgv");

const resultado_const_aberta_el = document.getElementById("resultado_const_aberta")
const resultado_const_coberta_el = document.getElementById("resultado_const_coberta")
const resultado_const_fechada_el = document.getElementById("resultado_const_fechada")
const resultado_const_total_el = document.getElementById("resultado_const_total")
const resultado_const_total_add_1_el = document.getElementById("resultado_const_total_add_1")
const resultado_const_total_add_1_copy_el = document.getElementById("resultado_const_total_add_1_copy")
const resultado_const_total_add_2_el = document.getElementById("resultado_const_total_add_2")
const resultado_const_total_add_2_copy_el = document.getElementById("resultado_const_total_add_2_copy")

const resultado_vgv_res_aberto_el = document.getElementById("resultado_vgv_res_aberto")
const resultado_vgv_res_coberto_el = document.getElementById("resultado_vgv_res_coberto")
const resultado_vgv_res_fechado_el = document.getElementById("resultado_vgv_res_fechado")
const resultado_vgv_com_el = document.getElementById("resultado_vgv_com")
const resultado_vgv_res_aberto_add_1_el = document.getElementById("resultado_vgv_res_aberto_add_1")
const resultado_vgv_el = document.getElementById("resultado_vgv")

const final_construcao_el = document.getElementById("final_construcao")
const final_vgv_el = document.getElementById("final_vgv")
const final_resultado_el = document.getElementById("final_resultado")

// funcoes de unidades

const _fmtBR = (n, digits = 2) =>
  new Intl.NumberFormat("pt-BR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(Number(n));

const brl = (n) => `R$ ${_fmtBR(n, 2)}`;                 // R$ 1.234,56
const m2  = (n) => `${_fmtBR(n, 2)}m²`;                  // 1.234,56m²
const brlPorM2 = (n) => `R$ ${_fmtBR(n, 2)}/m²`;         // R$ 1.234,56/m²
const percentBR = (n, digits = 2) => `${_fmtBR((Number(n) <= 1 && Number(n) >= -1) ? Number(n) * 100 : n, digits)}%`;


function update() {
    const cub_value = cub_el.value;
    const area_const_aberta_value = area_const_aberta_el.value;
    const equivalencia_aberta_value = equivalencia_aberta_el.value;
    const area_const_coberta_value = area_const_coberta_el.value;
    const equivalencia_coberta_value = equivalencia_coberta_el.value;
    const area_const_fechada_value = area_const_fechada_el.value;
    const equivalencia_fechada_value = equivalencia_fechada_el.value;
    const acrescimo_value = acrescimo_el.value / 100;
    const acrescimo_direto_value = acrescimo_direto_el.value;

    const area_res_aberta_priv_value = area_res_aberta_priv_el.value;
    const vgv_res_aberta_priv_value = vgv_res_aberta_priv_el.value;
    const area_res_coberta_priv_value = area_res_coberta_priv_el.value;
    const vgv_res_coberta_priv_value = vgv_res_coberta_priv_el.value;
    const area_res_fechada_priv_value = area_res_fechada_priv_el.value;
    const vgv_res_fechada_priv_value = vgv_res_fechada_priv_el.value;
    const area_comercial_value = area_comercial_el.value;
    const vgv_com_value = vgv_com_el.value;
    const acrescimo_direto_vgv_value = acrescimo_direto_vgv_el.value;

    resultado_const_aberta = cub_value * equivalencia_aberta_value * area_const_aberta_value;
    resultado_const_coberta = cub_value * equivalencia_coberta_value * area_const_coberta_value;
    resultado_const_fechada = cub_value * equivalencia_fechada_value * area_const_fechada_value;
    resultado_const_total = resultado_const_aberta + resultado_const_coberta + resultado_const_fechada;
    resultado_const_total_add_1 = resultado_const_total * (1 + acrescimo_value);
    resultado_const_total_add_2 = Number(resultado_const_total_add_1) + Number(acrescimo_direto_value);

    resultado_const_aberta_el.textContent = brl(resultado_const_aberta);
    resultado_const_coberta_el.textContent = brl(resultado_const_coberta);
    resultado_const_fechada_el.textContent = brl(resultado_const_fechada);
    resultado_const_total_el.textContent = brl(resultado_const_total);
    resultado_const_total_add_1_el.textContent = brl(resultado_const_total_add_1);
    resultado_const_total_add_1_copy_el.textContent = brl(resultado_const_total_add_1);
    resultado_const_total_add_2_el.textContent = brl(resultado_const_total_add_2);
    resultado_const_total_add_2_copy_el.textContent = brl(resultado_const_total_add_2);

    resultado_vgv_res_aberto = area_res_aberta_priv_value * vgv_res_aberta_priv_value;
    resultado_vgv_res_coberto = area_res_coberta_priv_value * vgv_res_coberta_priv_value;
    resultado_vgv_res_fechado = area_res_fechada_priv_value * vgv_res_fechada_priv_value;
    resultado_vgv_com = area_comercial_value * vgv_com_value;
    resultado_vgv_res_aberto_add_1 = Number(resultado_vgv_res_aberto) + Number(resultado_vgv_res_coberto) + Number(resultado_vgv_res_fechado) + Number(resultado_vgv_com) + Number(acrescimo_direto_vgv_value);

    resultado_vgv_res_aberto_el.textContent = brl(resultado_vgv_res_aberto);
    resultado_vgv_res_coberto_el.textContent = brl(resultado_vgv_res_coberto);
    resultado_vgv_res_fechado_el.textContent = brl(resultado_vgv_res_fechado);
    resultado_vgv_com_el.textContent = brl(resultado_vgv_com);
    resultado_vgv_res_aberto_add_1_el.textContent = brl(resultado_vgv_res_aberto_add_1);
    resultado_vgv_el.textContent = brl(resultado_vgv_res_aberto_add_1);

    final_construcao_el.textContent = resultado_const_total_add_2;
    final_vgv_el.textContent = resultado_vgv_res_aberto_add_1;
    final_resultado_el.textContent = resultado_vgv_res_aberto_add_1 - resultado_const_total_add_2;

    console.clear();
    console.log(cub_value);
    console.log(area_const_aberta_value);
    console.log(equivalencia_aberta_value);
    console.log(area_const_coberta_value);
    console.log(equivalencia_coberta_value);
    console.log(area_const_fechada_value);
    console.log(equivalencia_fechada_value);
    console.log(acrescimo_value);
    console.log(acrescimo_direto_value);
    console.log(area_res_aberta_priv_value);
    console.log(vgv_res_aberta_priv_value);
    console.log(area_res_coberta_priv_value);
    console.log(vgv_res_coberta_priv_value);
    console.log(area_res_fechada_priv_value);
    console.log(vgv_res_fechada_priv_value);
    console.log(area_comercial_value);
    console.log(vgv_com_value);
    console.log(acrescimo_direto_vgv_value);




}

cub_el.addEventListener("input", update);
area_const_aberta_el.addEventListener("input", update);
equivalencia_aberta_el.addEventListener("input", update);
area_const_coberta_el.addEventListener("input", update);
equivalencia_coberta_el.addEventListener("input", update);
area_const_fechada_el.addEventListener("input", update);
equivalencia_fechada_el.addEventListener("input", update);
acrescimo_el.addEventListener("input", update);
acrescimo_direto_el.addEventListener("input", update);
area_res_aberta_priv_el.addEventListener("input", update);
vgv_res_aberta_priv_el.addEventListener("input", update);
area_res_coberta_priv_el.addEventListener("input", update);
vgv_res_coberta_priv_el.addEventListener("input", update);
area_res_fechada_priv_el.addEventListener("input", update);
vgv_res_fechada_priv_el.addEventListener("input", update);
area_comercial_el.addEventListener("input", update);
vgv_com_el.addEventListener("input", update);
acrescimo_direto_vgv_el.addEventListener("input", update);

update()