import React, { useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import SabiApi from '../services/SabiApi';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

export const FormTimeRecord = () => {
    const {idActivity} = useParams();
    const navigate = useNavigate();
    const [activity, setActivity] = useState({
        idAct: 0,
        numberChange: '',
        descriptionChange : '',
        ownerChange: '',
        stateChange : '',
        createChange: '',
        descriptionActivity: '',
        observationActivity: '',
        requester: '',
        company: '',
        enviroment: '',
        affectServices: '',
        dateActivity: '',
        startTime: '',
        endTime: '',
        group: ''
    });
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [hours, setHours] = useState(0);
    const [comments, setComments] = useState('');
    const [stateAct, setStateAct] = useState('');


    useEffect(() => {
        idActivity ? getActivity() : resetForm();
    }, [])

    const getActivity = async() => {
        const url = '';
        await SabiApi.getActivityById(url, idActivity).then(responseData => {
            console.log(responseData);
            setActivity(responseData[0]);
            setTitle("Registro de horas - " + responseData[0].group);
            setIsDisabled(true);
        });
    }

    const resetForm = () => {
        setTitle("Registro de actividades");
        setIsDisabled(false);
    }

    const handleCancel = () => {
        navigate("/sabi/pendingactivities/", { replace: true });
    }


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
			console.log(form);
		} else {
            //Guardar los datos
            console.log("Horas: " + hours);
            console.log("Estado: " + stateAct);
            console.log("Comentarios: " + comments);
            Swal.fire({
                title: '',
                text: 'Se ha guardado el formulario correctamente',
                icon: 'success',
                confirmButtonText: 'Ok'
              }).then((result) => {
                  navigate("/sabi/pendingactivities/", { replace: true });
              });
            
        }
        setValidated(true);
    }

  return (
    <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2>{title}</h2>
            <Container>
                <Accordion defaultActiveKey={['0','1']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del cambio</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col sm={4}>
                                    <FloatingLabel controlId="txtChangeNumber" label="Número" className="mb-3">
                                        <Form.Control type="text" placeholder="Número" 
                                            name='changeNumber' 
                                            value={activity.numberChange || ""}
                                            onChange={e => setActivity({...activity,numberChange:e.target.value})}
                                            disabled={isDisabled}/>
                                    </FloatingLabel>
                                </Col>
                                <Col sm={8}>
                                    <FloatingLabel controlId="txtChangeDescription" label="Descripción" className="mb-3">
                                        <Form.Control type="text" placeholder="Descripción" 
                                        name='changeDescription' 
                                        value={activity.descriptionChange  || ""}
                                        onChange={e => setActivity({...activity,descriptionChange:e.target.value})}
                                        disabled/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm>
                                    <FloatingLabel controlId="txtChangeOwner" label="Dueño" className="mb-3">
                                        <Form.Control type="text" placeholder="Dueño" 
                                            name='changeOwner' 
                                            value={activity.ownerChange  || ""}
                                            onChange={e => setActivity({...activity,ownerChange:e.target.value})}
                                            disabled/>
                                    </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="txtChangeState" label="Estado" className="mb-3">
                                        <Form.Control type="text" placeholder="Estado" 
                                            name='changeState' 
                                            value={activity.stateChange  || ""}
                                            onChange={e => setActivity({...activity,stateChange:e.target.value})}
                                            disabled/>
                                    </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="dateChangeCreate" label="Fecha de creación" className="mb-3">
                                        <Form.Control type="date" placeholder="Fecha de creación" 
                                            name='changeCreate' 
                                            value={new Date(activity.createChange).toLocaleDateString('fr-CA', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit'
                                            })}
                                            onChange={e => setActivity({...activity,createChange:e.target.value})}
                                            disabled/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='infoChange'>
                        <Accordion.Header>Información de la actividad</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col sm>
                                    <FloatingLabel controlId="txtDescriptionActivity" label="Descripción" className="mb-3">
                                        <Form.Control as="textarea" placeholder="Descripción" 
                                            name='descriptionActivity' 
                                            value={activity.descriptionActivity  || ""}
                                            onChange={e => setActivity({...activity,descriptionActivity:e.target.value})}
                                            disabled={isDisabled}
                                            style={{ height: '100px' }}/>
                                    </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="txtObservationActivity" label="Observaciones" className="mb-3">
                                        <Form.Control as="textarea" placeholder="Observaciones" 
                                            name='observationActivity' 
                                            value={activity.observationActivity  || ""}
                                            onChange={e => setActivity({...activity,observationActivity:e.target.value})}
                                            disabled={isDisabled}
                                            style={{ height: '100px' }}/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm>
                                    <FloatingLabel controlId="txtRequester" label="Solicitante" className="mb-3">
                                        <Form.Control type="text" placeholder="Solicitante" 
                                            name='requester' 
                                            value={activity.requester  || ""}
                                            onChange={e => setActivity({...activity,requester:e.target.value})}
                                            disabled={isDisabled}/>
                                    </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="txtCompany" label="Empresa" className="mb-3">
                                        <Form.Control type="text" placeholder="Empresa" 
                                            name='company' 
                                            value={activity.company  || ""}
                                            onChange={e => setActivity({...activity,company:e.target.value})}
                                            disabled={isDisabled}/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            {!idActivity &&
                                (<Row>
                                    <Col sm>
                                        <FloatingLabel controlId="txtGroup" label="Grupo" className="mb-3">
                                            <Form.Control type="text" placeholder="Grupo" 
                                                name='group' 
                                                value={activity.group  || ""}
                                                onChange={e => setActivity({...activity,group:e.target.value})}
                                                disabled={isDisabled}
                                                required/>
                                        </FloatingLabel>
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingrese el grupo
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm>
                                        <FloatingLabel controlId="txtTypeActivity" label="Tipo de actividad" className="mb-3">
                                            <Form.Control required as="select" 
                                                type="select" 
                                                onChange={e => setStateAct(e.target.value)}
                                                name="typeActivity" >
                                                <option value="">Seleccione una opción</option>
                                                <option value="especial">Actividad especial</option>
                                                <option value="noProgramada">Actividad no programada</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Por favor seleccione un tipo de actividad
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Col>
                                </Row>)
                            }
                            <Row>
                                <Col sm>
                                    <FloatingLabel controlId="txtEnvironment" label="Ambiente" className="mb-3">
                                        <Form.Control type="text" placeholder="Ambiente" 
                                            name='environment' 
                                            value={activity.enviroment  || ""}
                                            onChange={e => setActivity({...activity,enviroment:e.target.value})}
                                            disabled={isDisabled}/>
                                    </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="txtAffectedServices" label="Servicios Afectados" className="mb-3">
                                        <Form.Control type="text" placeholder="Servicios Afectados" 
                                            name='affectedServices' 
                                            value={activity.affectServices  || ""}
                                            onChange={e => setActivity({...activity,affectServices:e.target.value})}
                                            disabled={isDisabled}/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm>
                                    <FloatingLabel controlId="txtDateActivity" label="Fecha" className="mb-3">
                                        <Form.Control type="date" placeholder="Fecha" 
                                            name='dateActivity' 
                                            value={new Date(activity.dateActivity).toLocaleDateString('fr-CA', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit'
                                            })}
                                            onChange={e => setActivity({...activity,dateActivity:e.target.value})}
                                            disabled={isDisabled}/>
                                    </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="txtStartTime" label="Hora inicio" className="mb-3">
                                        <Form.Control type="time" placeholder="Hora inicio" 
                                            name='startTime' 
                                            value={activity.startTime  || ""}
                                            onChange={e => setActivity({...activity,startTime:e.target.value})}
                                            disabled={isDisabled}/>
                                    </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="txtEndTime" label="Hora fin" className="mb-3">
                                        <Form.Control type="time" placeholder="Hora fin" 
                                            name='endTime' 
                                            value={activity.endTime  || ""}
                                            onChange={e => setActivity({...activity,endTime:e.target.value})}
                                            disabled={isDisabled}/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Row className='infoSubmit'>
                    <div className='col-sm-4'>
                        <Row>
                            <Col>
                                <FloatingLabel controlId="txtHours" label="Horas trabajadas" className="mb-3">
                                    <Form.Control type="number" placeholder="Horas trabajadas" 
                                    name='hours' 
                                    onChange={e => setHours(e.target.value)}
                                    required />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese las horas trabajadas
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FloatingLabel controlId="txtStateActivity" label="Estado actividad" className="mb-3">
                                    <Form.Control required as="select" 
                                        type="select" 
                                        onChange={e => setStateAct(e.target.value)}
                                        name="stateActivity" >
                                        <option value="">Seleccione una opción</option>
                                        <option value="terminada">Terminada</option>
                                        <option value="cancelada">Cancelada</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        Por favor seleccione un estado
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </div>
                    <div className='col-sm-8'>
                        <Col>
                            <FloatingLabel controlId="txtComments" label="Comentarios" className="mb-3">
                                <Form.Control as="textarea" placeholder="Comentarios" 
                                name='comments' 
                                onChange={e => setComments(e.target.value)}
                                style={{ height: '135px' }} 
                                required />
                                <Form.Control.Feedback type="invalid">
                                    Por favor ingrese los comentarios de la actividad
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    </div>
                </Row>
                <Row className="justify-content-md-center mb-3" >
                    <Col ></Col>
                    <Col ><Button variant="danger" onClick={handleCancel}>Cancelar</Button></Col>
                    <Col ><Button type="submit" variant="primary">Guardar</Button></Col>
                    <Col ></Col>
                </Row>
            </Container>
        </Form>
    </>
  )
}
