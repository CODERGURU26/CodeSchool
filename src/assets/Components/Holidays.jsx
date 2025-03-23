import Nav from "./Navbar"
import Footer from "./Footer"
const Holidays = ()=>{
    const holidays = [
        {
            title:'Summer Vacation Holidays',
            Duration: '1 Month',
            Date : '24-05-2025'
        },
        {
            title:'Diwali Vacation Holidays',
            Duration: '1 Month',
            Date : '14-09-2025'
        },
        {
            title:' Ganpati Vacation Holidays',
            Duration: '1 Month',
            Date : '05-07-2025'
        },
        {
            title:'Winter Vacation Holidays',
            Duration: '1 Month',
            Date : '28-12-2025'
        },
        {
            title:'Summer Vacation Holidays',
            Duration: '1 Month',
            Date : '24-05-2025'
        },
        {
            title:'Diwali Vacation Holidays',
            Duration: '1 Month',
            Date : '14-09-2025'
        },
        {
            title:' Ganpati Vacation Holidays',
            Duration: '1 Month',
            Date : '05-07-2025'
        },
        {
            title:'Winter Vacation Holidays',
            Duration: '1 Month',
            Date : '28-12-2025'
        },
        {
            title:'Summer Vacation Holidays',
            Duration: '1 Month',
            Date : '24-05-2025'
        },
        {
            title:'Diwali Vacation Holidays',
            Duration: '1 Month',
            Date : '14-09-2025'
        },
        {
            title:' Ganpati Vacation Holidays',
            Duration: '1 Month',
            Date : '05-07-2025'
        },
        {
            title:'Winter Vacation Holidays',
            Duration: '1 Month',
            Date : '28-12-2025'
        }
    ]
    return(
        <>
         <Nav/>
         <div style={{
            background: 'radial-gradient( circle 508px at 19.6% 24.1%,  rgba(182,14,111,1) 0%, rgba(248,105,173,1) 90% )',
            width:'100%',
         }} className="p-4 ">
            <h1 style={{textAlign:'center', color:'white'}} className="text-3xl">
            <i className="ri-calendar-schedule-line mr-3"></i>
                Your Holidays</h1>
         </div>
         <div style={{
            width:'70%',
            margin:'0 auto'
         }}>
            <table width='100%'>
                <thead style={{
                    background:'#ddd'
                }} >
                    <tr >
                        <th style={{
                            padding:10
                        }}>Sr/No.</th>
                        <th>Title</th>
                        <th>Duration</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        holidays.map((item , index)=>{
                            return(
                                <tr style={{
                                    textAlign:'center',
                                    
                                }}>
                                <td  style={{
                                    padding:15,
                                    borderBottom:'1px solid #ccc'
                                }}>{index+1}</td>
                                <td style={{
                                    padding:15,
                                    borderBottom:'1px solid #ccc'
                                }}>{item.title}</td>
                                <td style={{
                                    padding:15,
                                    borderBottom:'1px solid #ccc'
                                }}>{item.Duration}</td>
                                <td style={{
                                    padding:15,
                                    borderBottom:'1px solid #ccc'
                                }}>{item.Date}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
         </div>
         <Footer/>
        </>
    )
}
export default Holidays