const getActivityById = async(url, idActivity)=>{
    console.log(idActivity);
    const Activities = [
        {
            idAct: 1,
            numberChange: 'CHG0290101',
            descriptionChange : 'Automate Studio',
            ownerChange: 'JUAN FERNANDO BAYONA ALVAREZ',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'Capacitación automate Studio',
            observationActivity: 'Capacitación de precisely a equipos seleccionados en comite',
            requester: 'JUAN FERNANDO BAYONA ALVAREZ',
            company: 'Intercolombia',
            enviroment: 'Calidad',
            affectServices: 'NA',
            dateActivity: new Date('2024-08-08'),
            startTime: '08:00',
            endTime: '12:00',
            group: 'CAU Estaciones_ITCO'
        },
        {
            idAct: 2,
            numberChange: 'CHG0280857',
            descriptionChange : 'Aplicación PI',
            ownerChange: 'JUAN CAMILO ECHAVARRIA MAZO',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'Instalación ambiente prueba PI',
            observationActivity: 'Instalación ambiente prueba PI',
            requester: 'JUAN CAMILO ECHAVARRIA MAZO',
            company: 'XM',
            enviroment: 'Pruebas',
            affectServices: 'NA',
            dateActivity: new Date('2024-08-08'),
            startTime: '08:00',
            endTime: '10:00',
            group: 'CAU Seguridad'
        },
        {
            idAct: 3,
            numberChange: 'CHG0282355',
            descriptionChange : 'Migración MDE TRANSELCA.',
            ownerChange: 'NICOLAS EDUARDO FLOREZ HERAZO',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'Migración MDE TRANSELCA. ',
            observationActivity: 'Migración MDE TRANSELCA. ',
            requester: 'NICOLAS EDUARDO FLOREZ HERAZO',
            company: 'Transelca',
            enviroment: 'Producción',
            affectServices: 'Estaciones, Antivirus.',
            dateActivity: new Date('2024-08-08'),
            startTime: '15:00',
            endTime: '16:00',
            group: 'CAU End Point'
        },
        {
            idAct: 4,
            numberChange: 'CHG0286883',
            descriptionChange : 'PoC Monitoreo y Observabilidad',
            ownerChange: 'JONATHAN ALEXIS SOTO MARIN',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'PoC Herramienta de Monitoreo y Observabilidad - Varias herramientas',
            observationActivity: 'Reunión con el proveedor Splunk para realizar una DEMO de esta solución. Por esta ocasión les solicito conectarnos a la sesión al link que nos compartirá el proveedor.',
            requester: 'JONATHAN ALEXIS SOTO MARIN',
            company: 'Intercolombia',
            enviroment: 'Pruebas',
            affectServices: 'Ninguno',
            dateActivity: new Date('2024-08-08'),
            startTime: '14:00',
            endTime: '16:00',
            group: 'CAU Redes'
        },
        {
            idAct: 5,
            numberChange: 'CHG0288289',
            descriptionChange : 'Nuevo servidor de correos',
            ownerChange: 'RAFAEL MENDOZA GONZALEZ',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'Modificacion de SQL Database Mail a nuevo servidor de correos',
            observationActivity: 'Modificacion de SQL Database Mail a nuevo servidor de correos clsanintv038  ',
            requester: 'RAFAEL MENDOZA GONZALEZ',
            company: 'Intervial',
            enviroment: 'Producción',
            affectServices: 'Ninguno',
            dateActivity: new Date('2024-08-08'),
            startTime: '10:00',
            endTime: '12:00',
            group: 'CAU Base de Datos_A'
        },
        {
            idAct: 6,
            numberChange: 'CHG0287615',
            descriptionChange : 'Implementación de seguridad a usuarios de AD',
            ownerChange: 'JONATHAN ALEXIS SOTO MARIN',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'Implementación FortiAuthenticator, FortiSandbox y FortiDeceptor',
            observationActivity: 'Generar el listado de usuarios, grupos y portales VPN relacionando si son de ISAMDNT o Azure. Generar listado de usuarios y tokens asignados. Diligenciar la información en el documento cargado en CM.',
            requester: 'JONATHAN ALEXIS SOTO MARIN',
            company: 'Intercolombia',
            enviroment: 'Producción',
            affectServices: 'Ninguno',
            dateActivity: new Date('2024-08-08'),
            startTime: '08:00',
            endTime: '10:00',
            group: 'CAU Seguridad'
        },
        {
            idAct: 7,
            numberChange: 'CHG0287615',
            descriptionChange : 'Implementación de seguridad a usuarios de AD',
            ownerChange: 'JONATHAN ALEXIS SOTO MARIN',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'Implementación FortiAuthenticator, FortiSandbox y FortiDeceptor',
            observationActivity: 'Generar el listado de usuarios, grupos y portales VPN relacionando si son de ISAMDNT o Azure. Generar listado de usuarios y tokens asignados. Diligenciar la información en el documento cargado en CM.',
            requester: 'JONATHAN ALEXIS SOTO MARIN',
            company: 'Intercolombia',
            enviroment: 'Producción',
            affectServices: 'Ninguno',
            dateActivity: new Date('2024-08-08'),
            startTime: '08:00',
            endTime: '10:00',
            group: 'CAU Seguridad'
        },
        {
            idAct: 8,
            numberChange: 'CHG0287615',
            descriptionChange : 'Implementación de seguridad a usuarios de AD',
            ownerChange: 'JONATHAN ALEXIS SOTO MARIN',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'Implementación FortiAuthenticator, FortiSandbox y FortiDeceptor',
            observationActivity: 'Generar el listado de usuarios, grupos y portales VPN relacionando si son de ISAMDNT o Azure. Generar listado de usuarios y tokens asignados. Diligenciar la información en el documento cargado en CM.',
            requester: 'JONATHAN ALEXIS SOTO MARIN',
            company: 'Intercolombia',
            enviroment: 'Producción',
            affectServices: 'Ninguno',
            dateActivity: new Date('2024-08-08'),
            startTime: '08:00',
            endTime: '10:00',
            group: 'CAU Seguridad'
        },
        {
            idAct: 9,
            numberChange: 'CHG0287615',
            descriptionChange : 'Implementación de seguridad a usuarios de AD',
            ownerChange: 'JONATHAN ALEXIS SOTO MARIN',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'Implementación FortiAuthenticator, FortiSandbox y FortiDeceptor',
            observationActivity: 'Generar el listado de usuarios, grupos y portales VPN relacionando si son de ISAMDNT o Azure. Generar listado de usuarios y tokens asignados. Diligenciar la información en el documento cargado en CM.',
            requester: 'JONATHAN ALEXIS SOTO MARIN',
            company: 'Intercolombia',
            enviroment: 'Producción',
            affectServices: 'Ninguno',
            dateActivity: new Date('2024-08-08'),
            startTime: '08:00',
            endTime: '10:00',
            group: 'CAU Seguridad'
        },
        {
            idAct: 10,
            numberChange: 'CHG0287615',
            descriptionChange : 'Implementación de seguridad a usuarios de AD',
            ownerChange: 'JONATHAN ALEXIS SOTO MARIN',
            stateChange : 'In progress',
            createChange: new Date('2024-06-20'),
            descriptionActivity: 'Implementación FortiAuthenticator, FortiSandbox y FortiDeceptor',
            observationActivity: 'Generar el listado de usuarios, grupos y portales VPN relacionando si son de ISAMDNT o Azure. Generar listado de usuarios y tokens asignados. Diligenciar la información en el documento cargado en CM.',
            requester: 'JONATHAN ALEXIS SOTO MARIN',
            company: 'Intercolombia',
            enviroment: 'Producción',
            affectServices: 'Ninguno',
            dateActivity: new Date('2024-08-08'),
            startTime: '08:00',
            endTime: '10:00',
            group: 'CAU Seguridad'
        }
    ]

    const Activity = Activities.filter(act => act.idAct == idActivity);
    console.log("Actividad de filtro");
    console.log(Activity);
    //const data = await res.json();
    return Activity;
}   

export const CustomerService = {
    getData() {
        return [
            {
                id: 1,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 2,
                numberChange: 'CHG0280857',
                descriptionChange: 'Instalación ambiente prueba PI',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '10:00',
                requester: 'JUAN CAMILO ECHAVARRIA MAZO',
                group: 'CAU Seguridad'
            },
            {
                id: 3,
                numberChange: 'CHG0282355',
                descriptionChange: 'Migración MDE TRANSELCA',
                date: '2024-08-07',
                startTime: '15:00',
                endTime: '14:00',
                requester: 'NICOLAS EDUARDO FLOREZ HERAZO',
                group: 'CAU End Point'
            },
            {
                id: 4,
                numberChange: 'CHG0286883',
                descriptionChange: 'PoC Herramienta de Monitoreo y Observabilidad - Varias herramientas',
                date: '2024-08-07',
                startTime: '14:00',
                endTime: '16:00',
                requester: 'JONATHAN ALEXIS SOTO MARIN',
                group: 'CAU Redes'
            },
            {
                id: 5,
                numberChange: 'CHG0288289',
                descriptionChange: 'Modificacion de SQL Database Mail a nuevo servidor de correos',
                date: '2024-08-07',
                startTime: '10:00',
                endTime: '12:00',
                requester: 'RAFAEL MENDOZA GONZALEZ',
                group: 'CAU Base de Datos_A'
            },
            {
                id: 6,
                numberChange: 'CHG0281835',
                descriptionChange: 'Espacio de pruebas ETL y cubos COMEDXMAZ019',
                date: '2024-08-07',
                startTime: '14:00',
                endTime: '15:00',
                requester: 'JORGE ANDRÉS CASTRO RESTREPO',
                group: 'CAU Base de Datos_A'
            },
            {
                id: 7,
                numberChange: 'CHG0286000',
                descriptionChange: 'Creación de los certificados autofirmados para impresoras',
                date: '2024-08-08',
                startTime: '10:00',
                endTime: '12:00',
                requester: 'YONERIC ZULETA QUIROZ',
                group: 'CAU Servidores AD'
            },
            {
                id: 8,
                numberChange: 'CHG0281386',
                descriptionChange: 'Creación de manuales para los drivers, librerias y complementos.',
                date: '2024-08-08',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'YONERIC ZULETA QUIROZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 9,
                numberChange: 'CHG0288285',
                descriptionChange: 'Migración de la base de datos de CONSITFASORIAL para Mongo 6.0',
                date: '2024-08-08',
                startTime: '14:00',
                endTime: '17:00',
                requester: 'JIMMY ALEXANDER CASTILLO PARRA',
                group: 'CAU Bases de Datos'
            },
            {
                id: 10,
                numberChange: 'CHG0287615',
                descriptionChange: 'Implementación FortiAuthenticator, FortiSandbox y FortiDeceptor',
                date: '2024-08-09',
                startTime: '08:00',
                endTime: '10:00',
                requester: 'JONATHAN ALEXIS SOTO MARIN',
                group: 'CAU Seguridad'
            },
            {
                id: 11,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 12,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 13,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 14,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 15,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 16,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 17,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 18,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 19,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 20,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 21,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 22,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            },
            {
                id: 23,
                numberChange: 'CHG0290101',
                descriptionChange: 'Capacitación automate Studio',
                date: '2024-08-07',
                startTime: '08:00',
                endTime: '12:00',
                requester: 'JUAN FERNANDO BAYONA ALVAREZ',
                group: 'CAU Estaciones_ITCO'
            }
        ];
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getCustomers(params) {
        const queryParams = params
            ? Object.keys(params)
                  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&')
            : '';

        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    }
};

const SabiApi = {
    getActivityById
}

export default SabiApi;