using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmAPI.Models
{
    public class Sapling
    {
        public int SaplingId { get; set; }
        public string SaplingName { get; set; }
        public string Species { get; set; }
        public string DateOfPlantation { get; set; }
        public string PhotoFileName { get; set; }
    }
}
