export default function mockdata(labels,data){
    const mockdata = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data:data,
                backgroundColor: [
                    "#2D82FE",
                    "rgba(47, 237, 81, 0.76)",
                    "#FF9E57"
                ],
                borderColor: [
                    "#2D82FE",
                    "rgba(47, 237, 81, 0.76)",
                    "#FF9E57"
                ],
                borderWidth:-1,
            },
        ]
    };
    return mockdata
}