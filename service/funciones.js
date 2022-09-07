function convertirFechaLarga(fecha) {
    let year =  fecha.getFullYear();
    let month = fecha.getMonth() + 1 < 10 ? '0' + (fecha.getMonth() + 1) : fecha.getMonth() + 1;
    let day = fecha.getDate() < 10 ? '0' + (fecha.getDate()) : fecha.getDate();
    let hour = fecha.getHours() < 10 ? '0' + (fecha.getHours()) : fecha.getHours();
    let minute = fecha.getMinutes() < 10 ? '0' + (fecha.getMinutes()) : fecha.getMinutes();
    let seconds = fecha.getSeconds() < 10 ? '0' + (fecha.getSeconds()) : fecha.getSeconds();
    return year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + seconds + 'Z';
}

function convertirFechaCorta(fecha) {
    let y = fecha.getFullYear();
    let m = fecha.getMonth() + 1 < 10 ? '0' + (fecha.getMonth() + 1) : fecha.getMonth() + 1;
    let d = fecha.getDate() < 10 ? '0' + (fecha.getDate()) : fecha.getDate();
    return y + '-' + m + '-' + d;
}

function datosGenerales(datosGenerales){
    if (datosGenerales.segundoApellido === null){
        datosGenerales.segundoApellido = "";
    }
    if (datosGenerales.nacionalidad === "MEX"){
        datosGenerales.nacionalidad = "MX"
    }
    if (datosGenerales.correoElectronico){
        if(datosGenerales.correoElectronico.institucional === null)
            datosGenerales.correoElectronico.institucional = datosGenerales.correoElectronico.personal;
    }
    if (datosGenerales.situacionPersonalEstadoCivil.clave === "CON") {
        datosGenerales.situacionPersonalEstadoCivil.valor = "CONCUBINA/CONCUBINARIO/UNIÓN LIBRE"
    }

    return datosGenerales;
}

function datosCurricularesDeclarante(datosCurricularesDeclarante){
    if (datosCurricularesDeclarante.escolaridad.length >= 1) {
        datosCurricularesDeclarante.escolaridad.forEach((n) => {
            if(n.carreraAreaConocimiento === null){
                n.carreraAreaConocimiento = "";
            }
        n.fechaObtencion = convertirFechaCorta(n.fechaObtencion);
        return n;
        })
    }
    return datosCurricularesDeclarante;
}

function datosEmpleoCargoComision(datosEmpleoCargoComision){
    datosEmpleoCargoComision.fechaTomaPosesion = convertirFechaCorta(datosEmpleoCargoComision.fechaTomaPosesion);
    if(datosEmpleoCargoComision.telefonoOficina.extension === null){
        datosEmpleoCargoComision.telefonoOficina.extension = "";
    }
    if(datosEmpleoCargoComision.telefonoOficina.telefono === null){
        datosEmpleoCargoComision.telefonoOficina.telefono = "";
    }
    if(datosEmpleoCargoComision.domicilioMexico){
        if(datosEmpleoCargoComision.domicilioMexico.numeroInterior === null){
            datosEmpleoCargoComision.domicilioMexico.numeroInterior = "";
        }
    }
    if(datosEmpleoCargoComision.domicilioExtranjero){
        if(datosEmpleoCargoComision.domicilioExtranjero.numeroInterior === null){
            datosEmpleoCargoComision.domicilioExtranjero.numeroInterior = "";
        }
    }
    return datosEmpleoCargoComision;
}

function domicilioDeclarante(domicilioDeclarante){
    if(domicilioDeclarante.domicilioMexico){
        if(domicilioDeclarante.domicilioMexico.numeroInterior === null){
            domicilioDeclarante.domicilioMexico.numeroInterior = "";
        }
    }
    if(domicilioDeclarante.domicilioExtranjero){
        if(domicilioDeclarante.domicilioExtranjero.numeroInterior === null){
            domicilioDeclarante.domicilioExtranjero.numeroInterior = "";
        }
    }
    return domicilioDeclarante;
}

function experienciaLaboral(experienciaLaboral){
    if (experienciaLaboral.experiencia.length >= 1) {
        var experiencia = experienciaLaboral.experiencia;
        experiencia.forEach((n) => {
            n.fechaIngreso = convertirFechaCorta(n.fechaIngreso);
            n.fechaEgreso = convertirFechaCorta(n.fechaEgreso);
            if(n.rfc === null){
                n.rfc = "";
              }
              if(n.ambitoSector.clave === "PRV"){
                if(n.nivelOrdenGobierno === null){
                  n.nivelOrdenGobierno = "";
                }
                if(n.ambitoPublico === null){
                  n.ambitoPublico = "";
                }
                if(n.nombreEntePublico === null){
                  n.nombreEntePublico = "";
                }
                if(n.areaAdscripcion === null){
                  n.areaAdscripcion = "";
                }
                if(n.empleoCargoComision === null){
                  n.empleoCargoComision = "";
                }
                if(n.funcionPrincipal === null){
                  n.funcionPrincipal = "";
                }
              }
              if(n.ambitoSector.clave === "PUB"){
                if(n.nombreEmpresaSociedadAsociacion === null){
                  n.nombreEmpresaSociedadAsociacion = "";
                }
                if(n.area === null){
                  n.area = "";
                }
                if(n.puesto === null){
                  n.puesto = "";
                }
                if(n.sector === null){
                  n.sector = "";
                }
              }
              if(n.ambitoSector.clave === "OTR"){
                if(n.nivelOrdenGobierno === null){
                  n.nivelOrdenGobierno = "";
                }
                if(n.ambitoPublico === null){
                  n.ambitoPublico = "";
                }
                if(n.nombreEntePublico === null){
                  n.nombreEntePublico = "";
                }
                if(n.areaAdscripcion === null){
                  n.areaAdscripcion = "";
                }
                if(n.empleoCargoComision === null){
                  n.empleoCargoComision = "";
                }
                if(n.funcionPrincipal === null){
                  n.funcionPrincipal = "";
                }
              }
            return n;
        })
    }
    return experiencia;
}

function ingresos(ingresos, tipoDeclaracion){
    if(tipoDeclaracion === "MODIFICACION"){
        ingresos['remuneracionAnualCargoPublico'] = ingresos['remuneracionMensualCargoPublico'];
        ingresos['ingresoAnualNetoDeclarante'] = ingresos['ingresoMensualNetoDeclarante'];
        ingresos['totalIngresosAnualesNetos'] = ingresos['totalIngresosMensualesNetos'];
        delete ingresos['remuneracionMensualCargoPublico'];
        delete ingresos['ingresoMensualNetoDeclarante'];
        delete ingresos['totalIngresosMensualesNetos'];
    }
    if(tipoDeclaracion === "CONCLUSION"){
        ingresos['remuneracionConclusionCargoPublico'] = ingresos['remuneracionMensualCargoPublico'];
        ingresos['ingresoConclusionNetoDeclarante'] = ingresos['ingresoMensualNetoDeclarante'];
        ingresos['totalIngresosConclusionNetos'] = ingresos['totalIngresosMensualesNetos'];
        delete ingresos['remuneracionMensualCargoPublico'];
        delete ingresos['ingresoMensualNetoDeclarante'];
        delete ingresos['totalIngresosMensualesNetos']; 
    }
    return ingresos;
}

function actividadAnualAnterior(actividadAnualAnterior){
        actividadAnualAnterior.fechaIngreso = convertirFechaCorta(actividadAnualAnterior.fechaIngreso);
        actividadAnualAnterior.fechaConclusion = convertirFechaCorta(actividadAnualAnterior.fechaConclusion);
    return actividadAnualAnterior;
}

function datosPareja(datosPareja){
    datosPareja.fechaNacimiento = convertirFechaCorta(datosPareja.fechaNacimiento);
    datosPareja.ninguno=false;
    if (datosPareja.actividadLaboralSectorPublico) {
        datosPareja.actividadLaboralSectorPublico.fechaIngreso = convertirFechaCorta(datosPareja.actividadLaboralSectorPublico.fechaIngreso)
    }
    if (datosPareja.actividadLaboralSectorPrivadoOtro) {
        datosPareja.actividadLaboralSectorPrivadoOtro.fechaIngreso = convertirFechaCorta(datosPareja.actividadLaboralSectorPrivadoOtro.fechaIngreso)
    }
    if (datosPareja.domicilioMexico) {
        if (datosPareja.domicilioMexico.numeroInterior === null) {
          datosPareja.domicilioMexico.numeroInterior = "";
        }
      }
    if (datosPareja.domicilioExtranjero) {
        if (datosPareja.domicilioExtranjero.numeroInterior === null) {
            datosPareja.domicilioExtranjero.numeroInterior = "";
        }
    }
    if(datosPareja.actividadLaboralSectorPrivadoOtro){
       if(datosPareja.actividadLaboralSectorPrivadoOtro.rfc === null){
          datosPareja.actividadLaboralSectorPrivadoOtro.rfc = "";
        }
      }
    if(datosPareja.rfc === null){
        datosPareja.rfc = "";
    }
    if(datosPareja.curp === null){
        datosPareja.curp = "";
    }
    if(datosPareja.segundoApellido === null){
        datosPareja.segundoApellido = "";
    }
    if (rowExtend.datosPareja.actividadLaboral.clave === 'OTR') {
      rowExtend.datosPareja.actividadLaboral.clave = 'OTRO'
    }
    return datosPareja;
}

function datosDependientesEconomicos(dependienteEconomico){
    dependienteEconomico.forEach((n) => {
        n.fechaNacimiento = convertirFechaCorta(n.fechaNacimiento);
        if (n.actividadLaboralSectorPublico) {
            n.actividadLaboralSectorPublico.fechaIngreso = convertirFechaCorta(n.actividadLaboralSectorPublico.fechaIngreso)
        }
        if (n.actividadLaboralSectorPrivadoOtro) {
            n.actividadLaboralSectorPrivadoOtro.fechaIngreso = convertirFechaCorta(n.actividadLaboralSectorPrivadoOtro.fechaIngreso)
        }
        if(n.domicilioMexico){
          if(n.domicilioMexico.numeroInterior === null){
            n.domicilioMexico.numeroInterior = "";
          }
          if(n.domicilioExtranjero === null){
            n.domicilioExtranjero = "";
          }
        }
        if(n.domicilioExtranjero){
          if(n.domicilioExtranjero.numeroInterior===null){
            n.domicilioExtranjero.numeroInterior="";
          }
        }
        if(n.domicilioMexico === null){
          n.domicilioMexico = "";
        }
        if(n.domicilioExtranjero === null){
          n.domicilioExtranjero = "";
        }
        if(n.lugarDondeReside === null){
          n.lugarDondeReside = "";
        }
        if(n.domicilioMexico === null && n.domicilioExtranjero === null){
          n.lugarDondeReside = "SE DESCONOCE";
          n.domicilioMexico = "";
          n.domicilioExtranjero = "";
        }
        if(n.actividadLaboralSectorPrivadoOtro != undefined){
          if(n.actividadLaboralSectorPrivadoOtro.rfc === null){
            n.actividadLaboralSectorPrivadoOtro.rfc = "";
          }
        }
        if(n.actividadLaboralSectorPublico === null){
          n.actividadLaboralSectorPublico = "";
        }
        if(n.actividadLaboralSectorPrivadoOtro === null){
          n.actividadLaboralSectorPrivadoOtro = "";
        }
        if(n.actividadLaboralSectorPrivadoOtro){
          if(n.actividadLaboralSectorPrivadoOtro.proveedorContratistaGobierno === null){
            n.actividadLaboralSectorPrivadoOtro.proveedorContratistaGobierno = "";
          }
        }
        if(n.actividadLaboral.clave === "NIN" && (n.actividadLaboralSectorPublico === null || n.actividadLaboralSectorPrivadoOtro === null)){
          n.actividadLaboralSectorPublico = "";
          n.actividadLaboralSectorPrivadoOtro = "";
        }
        if(n.segundoApellido === null){
          n.segundoApellido = "";
        }
        if(n.rfc === null){
          n.rfc = "";
        }
        if(n.curp === null){
          n.curp = "";
        }
        return n;
    })
    return dependienteEconomico;
}

function bienesInmuebles(bienInmueble){
  bienInmueble.forEach((n) => {
    n.fechaAdquisicion = convertirFechaCorta(n.fechaAdquisicion);
    if (n.superficieConstruccion.unidad === null) {
      n.superficieConstruccion.unidad = 'm2';
    }
    if (n.superficieTerreno.unidad === null) {
      n.superficieTerreno.unidad = 'm2';
    }
    if(n.domicilioMexico){
      if (n.domicilioMexico.numeroInterior === null) {
        n.domicilioMexico.numeroInterior = "";
      }
    }
    if (n.domicilioExtranjero){
      if(n.domicilioExtranjero.numeroInterior === null) {
        n.domicilioExtranjero.numeroInterior = "";
      }
    }
    if(n.domicilioExtranjero === null){
      delete n.domicilioExtranjero;
    }
    if(n.domicilioMexico === null){
      delete n.domicilioMexico;
    }
    if (n.tercero[0].tipoPersona === null) {
      delete n.tercero;
    }
    else {
      if (n.tercero[0].nombreRazonSocial === null) {
         n.tercero[0].nombreRazonSocial = "";
      }
      if (n.tercero[0].rfc === null) {
         n.tercero[0].rfc = "";
      }
    }
    if(n.motivoBaja === null){
      delete n.motivoBaja;
    }
    if(n.formaPago ===  'CREDITO'){
      n.formaPago = 'CRÉDITO';
    }
    if(n.formaPago ===  'NO_APLICA'){
      n.formaPago = 'NO APLICA';
    }
    if(n.valorConformeA ===  'ESCRITURA_PUBLICA'){
      n.valorConformeA = 'ESCRITURA PÚBLICA';
    }
    n.superficieTerreno.valor = Math.floor(n.superficieTerreno.valor);
    n.superficieConstruccion.valor = Math.floor(n.superficieConstruccion.valor);
    return n;
  })
  return bienInmueble;
}

function vehiculos(vehiculo){
  vehiculo.forEach((n) => {
    n.fechaAdquisicion = convertirFechaCorta(n.fechaAdquisicion);
    if (n.tercero[0].tipoPersona === null) {
      delete n.tercero;
    }
    else {
      if (n.tercero[0].nombreRazonSocial === null) {
         n.tercero[0].nombreRazonSocial = "";
      }
      if (n.tercero[0].rfc === null) {
         n.tercero[0].rfc = "";
      }
    }
    if(n.lugarRegistro.pais === null || !n.lugarRegistro.pais){
      n.lugarRegistro.pais = "MX";
    }
    if (n.lugarRegistro.entidadFederativa === null) {
      n.lugarRegistro.entidadFederativa = "";
    }
    if (n.lugarRegistro.pais != 'MX') {
      delete n.lugarRegistro.entidadFederativa;
    }
    if(n.motivoBaja === null){
      delete n.motivoBaja;
    }
    if(n.formaPago ===  'CREDITO'){
      n.formaPago = 'CRÉDITO';
    }
    if(n.formaPago ===  'NO_APLICA'){
      n.formaPago = 'NO APLICA';
    }
    return n;
  })
  return vehiculo;
}

function bienesMuebles(bienMueble){ 
  bienMueble.forEach((n) => {
    n.fechaAdquisicion = convertirFechaCorta(n.fechaAdquisicion);
    if (n.tercero[0].tipoPersona === null) {
      delete n.tercero;
    }
    else {
      if (n.tercero[0].nombreRazonSocial === null) {
         n.tercero[0].nombreRazonSocial = "";
      }
      if (n.tercero[0].rfc === null) {
         n.tercero[0].rfc = "";
      }
    }
    if(n.motivoBaja === null){
      delete n.motivoBaja;
    }
    if(n.formaPago ===  'CREDITO'){
      n.formaPago = 'CRÉDITO';
    }
    if(n.formaPago ===  'NO_APLICA'){
      n.formaPago = 'NO APLICA';
    }
    return n;
  })
  return bienMueble;
}

function adeudosPasivos(adeudo){
  adeudo.forEach((n) => {
    n.fechaAdquisicion = convertirFechaCorta(n.fechaAdquisicion);
    if (n.tercero[0].tipoPersona === null) {
      delete n.tercero;
    }
    else {
      if (n.tercero[0].nombreRazonSocial === null) {
         n.tercero[0].nombreRazonSocial = "";
      }
      if (n.tercero[0].rfc === null) {
         n.tercero[0].rfc = "";
      }
    }
    if(n.montoOriginal){
      if(n.montoOriginal.moneda === null){
        n.montoOriginal.moneda = "MXN";
      }
    }
    if(n.saldoInsolutoSituacionActual){
      if(n.saldoInsolutoSituacionActual.moneda === null){
        n.saldoInsolutoSituacionActual.moneda = "MXN";
      }
    }
    if(n.localizacionAdeudo){
      if(n.localizacionAdeudo.pais === null){
        n.localizacionAdeudo.pais = "MX";
      }
    }
    if(n.motivoBaja === null){
      delete n.motivoBaja;
    }
    return n;
  })
  return adeudo;
}

function inversionesCuentasValores(inversion){
  inversion.forEach((n) => {
    if(n.localizacionInversion){
      if(n.localizacionInversion.institucionRazonSocial === null){
        n.localizacionAdeudo.institucionRazonSocial = "";
      }
      if(n.localizacionInversion.rfc === null){
        n.localizacionInversion = "";
      }
      if(n.localizacionInversion.pais === null){
        n.localizacionInversion.pais = "MX";
      }
    }
    if (n.tercero[0].tipoPersona === null) {
      delete n.tercero;
    }
    else {
      if (n.tercero[0].nombreRazonSocial === null) {
         n.tercero[0].nombreRazonSocial = "";
      }
      if (n.tercero[0].rfc === null) {
         n.tercero[0].rfc = "";
      }
    }
    if(n.motivoBaja === null){
      delete n.motivoBaja;
    }
    if(n.saldoSituacionActual){
      if(n.saldoSituacionActual.moneda === null){
        n.saldoSituacionActual = "MXN";
      }
    }
    return n;
  })
  return inversion;
}

function prestamoComodato(prestamo){
  prestamo.forEach((n) => {
    if(n.tipoBien){
      if(n.tipoBien.inmueble){
        if(n.tipoBien.inmueble.domicilioMexico){
          if(n.tipoBien.inmueble.domicilioMexico.numeroInterior === null){
            n.tipoBien.inmueble.domicilioMexico.numeroInterior = "";
          }
        }
        if(n.tipoBien.inmueble.domicilioExtranjero){
          if(n.tipoBien.inmueble.domicilioExtranjero.numeroInterior === null){
            n.tipoBien.inmueble.domicilioExtranjero.numeroInterior = "";
          }
        }
      }
      if (n.tipoBien.vehiculo) {
        if (n.tipoBien.vehiculo.lugarRegistro.pais != 'MX') {
          delete n.tipoBien.vehiculo.lugarRegistro.entidadFederativa;
        }
      }
    }
    return n;
  })
  return prestamo;
}

function participacion(participacion){
  participacion.forEach((n)=>{
    if(n.tipoOperacion === null){
      n.tipoOperacion = "AGREGAR";
    }
    if(n.montoMensual === null){
      n.montoMensual = "";
    }
    if(n.montoMensual){
      if(n.montoMensual.moneda === null){
        n.montoMensual.moneda = "MXN";
      }
    }
    if(n.ubicacion){
      if(n.ubicacion.pais === null){
        n.ubicacion.pais = "MX";
      }
    }
    return n;
  })
  return participacion;
}

function tomaDeciciones(tomaDecision){
  tomaDecision.forEach((n) => {
    n.fechaInicioParticipacion = convertirFechaCorta(n.fechaInicioParticipacion);
    if(n.tipoOperacion === null){
      n.tipoOperacion = "AGREGAR";
    }
    if(n.montoMensual === null){
      n.montoMensual = "";
    }
    if(n.montoMensual){
      if(n.montoMensual.moneda === null){
        n.montoMensual.moneda = "MXN";
      }
    }
    if(n.ubicacion){
      if(n.ubicacion.pais === null){
        n.ubicacion.pais = "MX";
      }
    }
    return n;
  });
  return tomaDecision;
}

function apoyos(apoyo){
  apoyo.forEach((n) => {
    if(n.montoApoyoMensual){
      if (n.montoApoyoMensual.moneda === null) {
        n.montoApoyoMensual.moneda = 'MXN';
      }
    }
    return n;
  });
  return apoyo;
}

function representaciones(representacion){
  representacion.forEach((n) => {
    n.fechaInicioRepresentacion = convertirFechaCorta(n.fechaInicioRepresentacion);
    if(n.tipoOperacion === null){
      n.tipoOperacion = "AGREGAR";
    }
    if(n.montoMensual === null){
      n.montoMensual = "";
    }
    if(n.montoMensual){
      if(n.montoMensual.moneda === null){
        n.montoMensual.moneda = "MXN";
      }
    }
    if(n.ubicacion){
      if(n.ubicacion.pais === null){
        n.ubicacion.pais = "MX";
      }
    }
    if(n.rfc === null){
      n.rfc = "";
    }
    return n;
  });
  return representacion;
}

function clientesPrincipales(cliente){
  cliente.forEach((n) => {
    if(n.empresa.rfc === null){
      n.empresa.rfc = "";
    }
    if(n.ubicacion){
      if(n.ubicacion.pais === null){
        n.ubicacion.pais = "MX";
      }
      if(n.ubicacion.entidadFederativa === null){
        n.ubicacion.entidadFederativa = "";
      }
    }
    if(n.clientePrincipal === null){
      n.clientePrincipal = "";
    }
    if(n.montoAproximadoGanancia.moneda === null){
      n.montoAproximadoGanancia.moneda = "MXN";
    }
    return n;
  });
  return cliente;
}

function beneficiosPrivados(beneficio){
  beneficio.forEach((n) => {
    if(n.otorgante){
      if (n.otorgante.tipoPersona === null) {
        delete n.otorgante;
      }
      else {
        if (n.otorgante.nombreRazonSocial === null) {
           n.otorgante.nombreRazonSocial = "";
        }
        if (n.otorgante.rfc === null) {
           n.otorgante.rfc = "";
        }
      }
    }
    if(n.montoMensualAproximado){
      if(n.montoMensualAproximado.moneda === null){
        n.montoMensualAproximado.moneda = "MXN";
      }
    }
    return n;
  });
  return beneficio;
}

function fideicomisos(fideicomiso){
  fideicomiso.forEach((n) => {
    if(n.rfcFideicomiso === null){
      n.rfcFideicomiso = "";
    }
    if(n.fideicomitente.rfc === null){
      n.fideicomitente.rfc = "";
    }
    if(n.extranjero === null){
      n.extranjero = "MX";
    }
    if(n.fideicomitente === null){
      n.fideicomitente = "";
    }
    if(n.fiduciario === null){
      n.fiduciario = "";
    }
    if(n.fideicomisario === null){
      n.fideicomisario = "";
    }
    return n;
  });
  return fideicomiso;
}

module.exports = {
    convertirFechaLarga,
    datosGenerales,
    datosCurricularesDeclarante,
    datosEmpleoCargoComision,
    domicilioDeclarante,
    experienciaLaboral,
    ingresos,
    actividadAnualAnterior,
    datosPareja,
    datosDependientesEconomicos,
    bienesInmuebles,
    vehiculos,
    bienesMuebles,
    adeudosPasivos,
    inversionesCuentasValores,
    prestamoComodato,
    participacion,
    tomaDeciciones,
    apoyos,
    representaciones,
    clientesPrincipales,
    beneficiosPrivados,
    fideicomisos
};
