import Header from "../components/Header";
import Card from "../components/Card";
import SwitchButton from "../components/SwitchButton";
import ProfilePicture from "../components/ProfilePicture";
import Projects from "../components/Projects";
import Slides from "../components/Slides";
import { contentTabHome, contentTabProjects } from "./slidesConfig";

export const tabs = [

    {
    id: 'tab1',
    icon: 'home',
    content: (
        <>
        <Header>
            <ProfilePicture />
            <Card title='Rafael Fernández G.' text='Desarrollador Fullstack' width='auto' />
            <Card title='Santiago,' text='CL' icon='south_america' width='150px' />
            <SwitchButton className='ml-auto'/>
        </Header>
        <Slides slide={contentTabHome} showTtlIco={true} autoSlide={false} fullwidth={false}/>
        <Slides slide={contentTabHome} showTtlIco={true} autoSlide={false} fullwidth={false}/>
        </>
    )
    },

    {
    id: 'tab2',
    icon: 'deployed_code',
    content: (
        <>
        <Header height="15px">
            <span className='material-symbols-outlined text-3xl'>deployed_code</span>
            <Card title='Proyectos personales' text='' width='auto' height="70px" bgcolor='none' border='none' ttlSize='1rem' />
        </Header>
        <Slides slide={contentTabProjects} showTtlIco={false} autoSlide={true} fullwidth={true}/>
        <Projects className=''/>
        </>
    )
    },

    {
    id: 'tab3',
    icon: 'workspaces',
    content: (
        <>
        <Header>
            <Card title="Redes" text="Contenido no implementado aún" width="auto" />
        </Header>
        </>
    )
    },

];