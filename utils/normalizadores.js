function completarCamposFaltantes(data) {
  const sp = data?.declaracion?.situacionPatrimonial;

  if (!sp) return data;

  // experienciaLaboral
  if (sp.experienciaLaboral) {
    let experienciaArr = [];

    if (Array.isArray(sp.experienciaLaboral)) {
      experienciaArr = sp.experienciaLaboral;
    } else if (Array.isArray(sp.experienciaLaboral.experiencia)) {
      experienciaArr = sp.experienciaLaboral.experiencia;
    }

    // 🔴 RECONSTRUIR con orden correcto
    sp.experienciaLaboral = {
      ninguno: experienciaArr.length === 0,
      experiencia: experienciaArr
    };
  }

  // bienesInmuebles
  sp.bienesInmuebles?.bienInmueble?.forEach(b => {
    if (b.tercero === undefined){
      b.tercero = [{
        tipoPersona: "FISICA",
        nombreRazonSocial: "",
        rfc: ""
      }];
    } else {
      b.tercero = b.tercero.map(t => ({
        tipoPersona: t.tipoPersona?.trim() ? t.tipoPersona : "FISICA",
        nombreRazonSocial: t.nombreRazonSocial || "",
        rfc: t.rfc || ""
      }));
    }

    if (b.datoIdentificacion === undefined) {
      b.datoIdentificacion = "";
    }
  });

  // vehiculos
  sp.vehiculos?.vehiculo?.forEach(v => {
    if (!v.transmisor) {
      v.transmisor = [{
        tipoPersona: "FISICA",
        nombreRazonSocial: "",
        rfc: "",
        relacion: { clave: "", valor: "" }
      }];
    }

    if (!v.numeroSerieRegistro) {
      v.numeroSerieRegistro = "";
    }

    if (!v.lugarRegistro?.entidadFederativa) {
      v.lugarRegistro = {
        entidadFederativa: { clave: "", valor: "" },
        pais: v.lugarRegistro?.pais || "MX"
      };
    }
  });

  // inversiones
  sp.inversiones?.inversion?.forEach(i => {
    if (i.numeroCuentaContrato === undefined) {
      i.numeroCuentaContrato = "";
    }
  });

  // adeudos
  sp.adeudos?.adeudo?.forEach(a => {
    if (a.numeroCuentaContrato === undefined) {
      a.numeroCuentaContrato = "";
    }
  });

  // clientesPrincipales
  sp.interes?.clientesPrincipales?.cliente?.forEach(c => {
    if (!c.clientePrincipal) {
      c.clientePrincipal = {
        tipoPersona: "FISICA",
        nombreRazonSocial: "",
        rfc: ""
      };
    }
  });

  // beneficiosPrivados
  sp.interes?.beneficiosPrivados?.beneficio?.forEach(b => {
    if (!b.otorgante) {
      b.otorgante = {
        tipoPersona: "FISICA",
        nombreRazonSocial: "",
        rfc: ""
      };
    }
  });

  return data;
}

module.exports = { completarCamposFaltantes };
