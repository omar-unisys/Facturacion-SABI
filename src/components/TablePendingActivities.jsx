import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { CustomerService } from '../services/SabiApi';
import 'primeicons/primeicons.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Badge } from 'primereact/badge';


export const TablePendingActivities = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomers, setSelectedCustomers] = useState([]);
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    


    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(getCustomers(data)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const startTimeBodyTemplate = (rowData) => {
        return <>
            <Badge value={rowData.startTime} severity="info"></Badge> {'> '}
            <Badge value={rowData.endTime} severity="info"></Badge>
            </>;
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div>
                <h4 className="m-0 !important">Actividades pendientes</h4>
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar" />
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const handleFormTask = (event) => {
        Swal.fire({
            title: "",
            text: `¿Quieres gestionar la actividad del cambio ${event.data.numberChange}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonText: "Si"
            }).then((result) => {
            if (result.isConfirmed) {
                navigate("/sabi/timerecord/"+event.data.id, { replace: true });
            }
        });
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]} dataKey="id" selectionMode="checkbox" selection={selectedCustomers} onSelectionChange={(e) => setSelectedCustomers(e.value)}
                    onRowSelect={handleFormTask} filters={filters} filterDisplay="menu" globalFilterFields={['numberChange', 'descriptionChange', 'date', 'requester', 'group']}
                    emptyMessage="No se encontró ninguna actividad pendiente" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" size='small'>
                <Column field="numberChange" header="Cambio" sortable style={{ minWidth: '7rem' }} />
                <Column field="descriptionChange" header="Descripción" style={{ minWidth: '20rem' }} />
                <Column field="date" header="Fecha" sortable filterField="date" dataType="date" style={{ minWidth: '7rem' }} body={dateBodyTemplate}/>
                <Column field="startTime" header="Hora inicio y fin" dataType="numeric" style={{ minWidth: '8rem' }} body={startTimeBodyTemplate} />
                <Column field="requester" header="Solicitante" sortable style={{ minWidth: '11rem' }} />
                <Column field="group" header="Grupo" sortable style={{ minWidth: '10rem' }} />
            </DataTable>
        </div>
    );
}
