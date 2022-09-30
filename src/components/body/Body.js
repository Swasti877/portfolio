import { CardContent, Card, CardMedia, Typography, CardActions, Button, Grid, Container } from "@mui/material";
import "./Body.css";
import img1 from "../images/E-commerce.png";
import img2 from "../images/ToDoWebApp.png";
import img3 from "../images/whatsappClone.png";

export default function Body() {

    const ProjectDetails = [
        {
            title: "E-commerce",
            desc: "Amazon Clone, ReactJS was used to create the e-commerce web application, and Firebase handled the backend and database. There are checkout, addToCart, seller, and login modules. Stripe API handles checkout.",
            image: img1,
            projectLink: "https://github.com/Swasti877/online-veggies",
            workingLink: "https://online-veggies-2bac6.web.app/",
        },
        {
            title: "Live Chat",
            desc: "React JS was used to create the front end of the Whatsapp clone, Node JS was used to create the back end, and Material UI was used to design the user interface. Pusher is used to implement real-time databases",
            image: img3,
            projectLink: "https://github.com/Swasti877/whatsapp",
            workingLink: "",
        },
        {
            title: "To Do WebApp",
            desc: "ReactJs is used for the front end of the To Do WebApp application, NodeJs for the back end, and a JWT token for user authentication. Add notes, see all notes, and erase notes with this web application.",
            image: img2,
            projectLink: "https://github.com/Swasti877/backend",
            workingLink: "https://taskiffyy.herokuapp.com/",
        }
    ]

    return (
        <>
            <Container sx={{ px: 12.5, py: 6.25 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5} sx={{ mb: 5 }}>
                        <Typography variant="h2" component="div">
                            Swasti Bhagora
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
                        <Typography variant="h6" component="div" sx={{ color: "gray" }}>
                            Hi 👋, I'm Swasti Bhagora.
                            A passionate ReactJS developer from India.
                            🌱 I’m currently learning ReactJS
                        </Typography>
                    </Grid>

                    {/* Here card details */}
                    {ProjectDetails.map(e =>
                    (
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card sx={{ maxWidth: 400, bgcolor: '#0A1929' }} direction="column" >
                                <CardMedia component="img"
                                    alt="img"
                                    height="140"
                                    image={e.image} />
                                <CardContent sx={{ color: "white" }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.title}
                                    </Typography>
                                    <Typography varirant="body2" >
                                        {e.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" href={e.projectLink} target="_blank" color="info">Source Code</Button>
                                    {e.workingLink && <Button size="small" href={e.workingLink} target="_blank">Live Project</Button>}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" component="div">
                            Work History
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} container direction="column">
                        <Grid item >
                            <Typography variant="body2" component="div" sx={{ mb: 1 }}>
                                Oasis Infobyte | Feb 2022 - March 2022
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" component="div" sx={{ mb: 1 }}>
                                CreArt Solutions | Jun 2022 - Jul 2022
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" component="div" sx={{ mb: 1 }}>
                                VNurture Technologies | Jun 2022 - Jul 2022
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" component="div">
                            About
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2" component="div" style={{ lineHeight: "24px" }}>
                            Hi, I'm Swasti Bhagora currently pursuing a B.E in Computer Engineering in L D College of Engineering, Ahmedabad which falls under Gujarat Technology University. Had worked with ReactJS.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" component="div">
                            Contact me
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} container direction="column" spacing={0.5}>
                        <Grid item xs={12} sm={6}>
                            <Button href="https://www.linkedin.com/in/swasti-bhagora-602031218/" target="_blank" sx={{ color: "white" }}>LinkedIn</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button href="https://github.com/Swasti877/Swasti_Bhagora" target="_blank" sx={{ color: "white" }}>Github</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
