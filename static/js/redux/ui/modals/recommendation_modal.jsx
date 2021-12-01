/*
 Copyright (C) 2017 Semester.ly Technologies, LLC

 Semester.ly is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Semester.ly is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 */

 import PropTypes from 'prop-types';
 import React from 'react';
 import { FadeModal } from 'boron-15';

 class RecommendationModal extends React.Component {
   componentDidUpdate() {
     if (this.props.isVisible) {
       this.modal.show();
     }
   }

   render() {
     const modalHeader =
             (<div className="modal-content">
               <div className="modal-header">
                   <h1>Recommendation Modal!</h1>
               </div>
             </div>);
     const modalStyle = {
       width: '100%',
     };
     {console.log(this.props)}
     return (
       <FadeModal
         ref={(c) => { this.modal = c; }}
         className="pref-modal max-modal"
         modalStyle={modalStyle}
         onHide={this.props.toggleRecommendationModal}
       >
         <div id= "perf-modal-wrapper">
           {modalHeader}
         </div>
       </FadeModal>
     );
   }
 }

 RecommendationModal.propTypes = {
     toggleRecommendationModal: PropTypes.func.isRequired,
     isVisible: PropTypes.bool.isRequired,
 };

 export default RecommendationModal;