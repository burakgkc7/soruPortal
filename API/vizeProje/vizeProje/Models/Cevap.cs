//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace vizeProje.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Cevap
    {
        public int cevapId { get; set; }
        public string cevap1 { get; set; }
        public Nullable<int> cevapYazar { get; set; }
        public Nullable<int> soruId { get; set; }
    
        public virtual Kullanici Kullanici { get; set; }
        public virtual Soru Soru { get; set; }
    }
}
