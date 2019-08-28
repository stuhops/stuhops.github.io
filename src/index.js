var app = new Vue({
    el: 'app',
    data: {
        gpa: '3.7',
        graduationDate: 'May 2021',
        education: [
            { text: 'Computer Science Major, Utah State University' },
            { text: 'Experience in Python, Javascript, and C++'},
            { text: 'Logan High School Valedictorian \n      4.0 GPA with 3 AP classes' },
        ],
        experience: {
            zionGuru: {
                date: '2019/Present',
                name: 'Zion Guru',
                position: 'Outfitter and Guide',
            },
            usuOP: {
                date: '2018/Present',
                name: 'Utah State Outdoor Programs',
                position: 'Trip Leader',
            },
            shirkscapes: {
                date: '2018',
                name: 'Shirkscapes',
                position: 'Landscaper',
            },
            topJob: {
                date: '2017',
                name: 'Top Job Asphalt',
                position: 'Customer Service Representative'
            },
        },
        leadership: [
            { text: 'Stuart is a Trip Leader for Utah State Outdoor programs. While guiding, he is generally in charge of 10 participants and' +
                    ' oversees other Trip Leaders. Because of this he has grown immensely as a leader. He has learned a lot about' +
                    ' communication, delegation, and teamwork while showing students the great outdoors.' },
        ],
        service: [
            { text: 'Medical Missions:\n      2018 Dominican Republic\n      2012 Ecuador'},
            { text: 'USUSA Excellence in Neuroscience Club\n      Head of Graphic Design and Marketing'},
            { text: 'Full time mission to Mexico for the Church of Jesus Christ of Latter Day Saints in 2017'},
        ],
        references: {
            melaniePond: {
                name: 'Melanie Pond',
                position: 'USU Space Dynamics Lab HR',
                email: 'melanie.pond@usurf.edu',
                phoneType: 'Cell',
                phoneNumber: '(435) 881-0254',
            },
            gregDavis: {
                name: 'Greg Davis',
                position: 'USU Outdoor Programs Assistant Director',
                email: 'greg.j.davis@usu.edu',
                phoneType: 'Work',
                phoneNumber: '(435) 797-0066',
            },
            jakeShirk: {
                name: 'Jake Shirk',
                position: 'Shirkscapes Owner',
                email: 'jacob.shirkscapes@gmail.com',
                phoneType: 'Mobile',
                phoneNumber: '(435) 770-0845',
            },
        }
    },
    methods: {
        dropdownFactory: tag => {
            switch(tag){
                case education:
                    break;
                case experience:
                    break;
                case hobbies:
                    break;
                case leadership:
                    break;
                case service:
                    break;
                case references:
                    break;
            }
        }
    },
    created(){
    },

});